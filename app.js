(function () {
  "use strict";

  var index = [];
  var bySlug = {};
  var searchData = null;
  var searchLoading = null;

  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  };
  var tagId = function (t) { return encodeURIComponent(t); };

  // ---------- Sidebar ----------
  function link(c) {
    return '<li><a href="#/concept/' + c.slug + '" data-slug="' + c.slug + '">' + esc(c.title) + "</a></li>";
  }

  function renderConceptList() {
    $("concept-list").innerHTML = index.map(link).join("");
    $("concept-count").textContent = "(" + index.length + ")";
  }

  // Tags like "ai/agents" are grouped under "ai"; plain tags are top-level.
  function renderTagTree() {
    var tags = {};
    index.forEach(function (c) {
      var list = c.tags.length ? c.tags : ["(untagged)"];
      list.forEach(function (t) { (tags[t] = tags[t] || []).push(c); });
    });
    var groups = {};
    Object.keys(tags).sort().forEach(function (t) {
      var parts = t.split("/");
      var top = parts[0];
      (groups[top] = groups[top] || []).push({ tag: t, label: parts.slice(1).join("/") || parts[0] });
    });

    function tagBlock(t, label) {
      var items = tags[t].map(link).join("");
      return '<details data-tag="' + esc(tagId(t)) + '"><summary>' + esc(label) +
        ' <span class="count">(' + tags[t].length + ")</span></summary><ul class=\"list\">" + items + "</ul></details>";
    }

    var html = Object.keys(groups).sort().map(function (top) {
      var g = groups[top];
      if (g.length === 1 && g[0].tag === top) return '<div class="tag-group">' + tagBlock(top, top) + "</div>";
      var total = {};
      g.forEach(function (x) { tags[x.tag].forEach(function (c) { total[c.slug] = 1; }); });
      var inner = g.map(function (x) { return tagBlock(x.tag, x.label); }).join("");
      return '<div class="tag-group"><details><summary>' + esc(top) +
        ' <span class="count">(' + Object.keys(total).length + ")</span></summary>" + inner + "</details></div>";
    }).join("");
    $("tag-tree").innerHTML = html;
  }

  function markActive(slug) {
    var all = document.querySelectorAll("#nav a.active");
    Array.prototype.forEach.call(all, function (a) { a.classList.remove("active"); });
    if (!slug) return;
    var hits = document.querySelectorAll('#nav a[data-slug="' + slug + '"]');
    Array.prototype.forEach.call(hits, function (a) { a.classList.add("active"); });
    var first = $("concept-list").querySelector('a[data-slug="' + slug + '"]');
    if (first && $("concepts-section").open) first.scrollIntoView({ block: "nearest" });
  }

  // ---------- Article ----------
  function showHome() {
    $("article").innerHTML = "<h1>My Wiki</h1><p class=\"muted\">Choose a concept on the left, browse by tag, or search.</p>";
    markActive(null);
  }

  function showConcept(slug) {
    var c = bySlug[slug];
    if (!c) { $("article").innerHTML = "<h1>Not found</h1><p>No concept called " + esc(slug) + ".</p>"; return; }
    document.title = c.title + " — My Wiki";
    fetch("content/" + encodeURIComponent(slug) + ".md")
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
      .then(function (md) {
        var chips = c.tags.map(function (t) {
          return '<a class="chip" href="#/tag/' + tagId(t) + '">' + esc(t) + "</a>";
        }).join("");
        $("article").innerHTML =
          "<h1>" + esc(c.title) + "</h1>" +
          '<div class="meta">Published ' + esc(c.published) + " · Modified " + esc(c.modified) + "</div>" +
          '<div class="chips">' + chips + "</div>" + marked.parse(md);
        $("article").scrollTop = 0;
        window.scrollTo(0, 0);
        markActive(slug);
      })
      .catch(function () { $("article").innerHTML = "<p>Could not load this page.</p>"; });
  }

  function showTag(tag) {
    var list = index.filter(function (c) { return c.tags.indexOf(tag) !== -1; });
    $("article").innerHTML = "<h1>Tag: " + esc(tag) + "</h1><ul>" + list.map(function (c) {
      return '<li><a href="#/concept/' + c.slug + '">' + esc(c.title) + "</a> — <span class=\"muted\">" + esc(c.summary) + "</span></li>";
    }).join("") + "</ul>";
    var d = document.querySelector('details[data-tag="' + tagId(tag) + '"]');
    if (d) { $("tags-section").open = true; var p = d.parentElement.closest("details"); if (p) p.open = true; d.open = true; }
    markActive(null);
  }

  function route() {
    var h = decodeURIComponent(location.hash.replace(/^#\/?/, ""));
    var m = h.match(/^concept\/(.+)$/);
    if (m) return showConcept(m[1]);
    m = h.match(/^tag\/(.+)$/);
    if (m) return showTag(m[1]);
    showHome();
  }

  // ---------- Search ----------
  function loadSearch() {
    if (searchData) return Promise.resolve(searchData);
    if (!searchLoading) {
      searchLoading = fetch("data/search.json").then(function (r) { return r.json(); }).then(function (d) { searchData = d; return d; });
    }
    return searchLoading;
  }

  function runSearch(q) {
    var box = $("results");
    q = q.trim().toLowerCase();
    if (!q) { box.hidden = true; $("nav").hidden = false; return; }
    loadSearch().then(function (text) {
      var terms = q.split(/\s+/);
      var scored = [];
      index.forEach(function (c) {
        var head = (c.title + " " + c.summary + " " + c.tags.join(" ")).toLowerCase();
        var body = text[c.slug] || "";
        var score = 0;
        for (var i = 0; i < terms.length; i++) {
          var inHead = head.indexOf(terms[i]) !== -1;
          var inBody = body.indexOf(terms[i]) !== -1;
          if (!inHead && !inBody) return;
          score += (c.title.toLowerCase().indexOf(terms[i]) !== -1 ? 5 : 0) + (inHead ? 3 : 0) + (inBody ? 1 : 0);
        }
        scored.push({ c: c, s: score });
      });
      scored.sort(function (a, b) { return b.s - a.s; });
      box.innerHTML = scored.length
        ? scored.slice(0, 40).map(function (x) {
            return '<a href="#/concept/' + x.c.slug + '">' + esc(x.c.title) + "<small>" + esc(x.c.summary.slice(0, 110)) + "…</small></a>";
          }).join("")
        : '<p class="muted">No matches.</p>';
      box.hidden = false;
      $("nav").hidden = true;
    });
  }

  // ---------- Start ----------
  fetch("data/index.json")
    .then(function (r) { return r.json(); })
    .then(function (data) {
      index = data;
      index.forEach(function (c) { bySlug[c.slug] = c; });
      renderConceptList();
      renderTagTree();
      route();
    });

  window.addEventListener("hashchange", function () {
    $("search").value = "";
    runSearch("");
    route();
  });
  var timer;
  $("search").addEventListener("input", function (e) {
    clearTimeout(timer);
    var v = e.target.value;
    timer = setTimeout(function () { runSearch(v); }, 150);
  });
})();
