(function () {
  "use strict";

  var index = [];
  var bok = [];
  var bokBySlug = {};
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

  function bokLabel(b) {
    return (typeof b.chapter === "number" ? b.chapter + ". " : "") + b.title;
  }

  function bokLink(b) {
    return '<li><a href="#/bok/' + b.slug + '" data-slug="bok/' + b.slug + '">' + esc(bokLabel(b)) + "</a></li>";
  }

  // Sections (for example "AI") contain chapters in book order, then reference pages.
  function renderBokTree() {
    var sections = {};
    bok.forEach(function (b) { (sections[b.section] = sections[b.section] || []).push(b); });
    var html = '<div class="toc-link"><a href="#/bok" data-slug="bok">Table of contents</a></div>' +
      Object.keys(sections).map(function (name) {
        return '<div class="tag-group"><details data-section="' + esc(tagId(name)) + '"><summary>' + esc(name) +
          ' <span class="count">(' + sections[name].length + ")</span></summary><ul class=\"list\">" +
          sections[name].map(bokLink).join("") + "</ul></details></div>";
      }).join("");
    $("bok-tree").innerHTML = html;
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

    var html = Object.keys(groups).sort(function (x, y) {
      if (x === "(untagged)") return 1;
      if (y === "(untagged)") return -1;
      return x < y ? -1 : x > y ? 1 : 0;
    }).map(function (top) {
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
    var first = document.querySelector('#nav a[data-slug="' + slug + '"]');
    if (first) { var anc = first.closest("details"); while (anc) { anc.open = true; anc = anc.parentElement.closest("details"); } }
    if (first && !first.closest("details:not([open])")) first.scrollIntoView({ block: "nearest" });
  }

  // ---------- Article ----------
  function showHome() {
    $("article").innerHTML = "<p class=\"muted\" style=\"margin-top:28px\">Start with the <a href=\"#/bok\">Book of Knowledge</a>, choose a Concept on the left, browse by Tag, or search.</p>";
    markActive(null);
  }

  function showConcept(slug) {
    var c = bySlug[slug];
    if (!c) { $("article").innerHTML = "<h1>Not found</h1><p>No concept called " + esc(slug) + ".</p>"; return; }
    document.title = c.title + " — Karim's Knowledge Database";
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

  function chips(tags) {
    return tags.map(function (t) {
      return '<a class="chip" href="#/tag/' + tagId(t) + '">' + esc(t) + "</a>";
    }).join("");
  }

  function showBokHome() {
    var sections = {};
    bok.forEach(function (b) { (sections[b.section] = sections[b.section] || []).push(b); });
    $("article").innerHTML = "<h1>Book of Knowledge</h1>" +
      Object.keys(sections).map(function (name) {
        return "<h2>Section: " + esc(name) + "</h2><ul class=\"toc-list\">" + sections[name].map(function (b) {
          return '<li><a href="#/bok/' + b.slug + '">' + esc(bokLabel(b)) + "</a> — <span class=\"muted\">" + esc(b.summary.split(". ")[0].replace(/\.$/, "")) + ".</span></li>";
        }).join("") + "</ul>";
      }).join("");
    markActive("bok");
    document.title = "Book of Knowledge — Karim's Knowledge Database";
  }

  function showBok(slug) {
    var b = bokBySlug[slug];
    if (!b) { $("article").innerHTML = "<h1>Not found</h1><p>No page called " + esc(slug) + ".</p>"; return; }
    document.title = b.title + " — Karim's Knowledge Database";
    fetch("content/bok/" + encodeURIComponent(slug) + ".md")
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
      .then(function (md) {
        var pos = bok.indexOf(b);
        var prev = bok[pos - 1], next = bok[pos + 1];
        if (prev && prev.section !== b.section) prev = null;
        if (next && next.section !== b.section) next = null;
        var pager = '<div class="pager">' +
          (prev ? '<a href="#/bok/' + prev.slug + '">← ' + esc(bokLabel(prev)) + "</a>" : "<span></span>") +
          (next ? '<a href="#/bok/' + next.slug + '">' + esc(bokLabel(next)) + " →</a>" : "<span></span>") + "</div>";
        var where = "Section: " + esc(b.section) + (typeof b.chapter === "number" ? " · Chapter " + b.chapter : " · Reference");
        $("article").innerHTML =
          "<h1>" + esc(b.title) + "</h1>" +
          '<div class="meta">' + where + " · Published " + esc(b.published) + " · Modified " + esc(b.modified) +
          (b.status && b.status !== "final" ? " · Status: " + esc(b.status) : "") + "</div>" +
          '<div class="chips">' + chips(b.tags) + "</div>" + marked.parse(md) + pager;
        $("article").scrollTop = 0;
        window.scrollTo(0, 0);
        markActive("bok/" + slug);
      })
      .catch(function () { $("article").innerHTML = "<p>Could not load this page.</p>"; });
  }

  function showTag(tag) {
    var list = index.filter(function (c) { return c.tags.indexOf(tag) !== -1; });
    var chapters = bok.filter(function (b) { return b.tags.indexOf(tag) !== -1; });
    $("article").innerHTML = "<h1>Tag: " + esc(tag) + "</h1>" +
      (chapters.length ? "<h2>Book of Knowledge</h2><ul>" + chapters.map(function (b) {
        return '<li><a href="#/bok/' + b.slug + '">' + esc(bokLabel(b)) + "</a> — <span class=\"muted\">" + esc(b.summary) + "</span></li>";
      }).join("") + "</ul><h2>Concepts</h2>" : "") + "<ul>" + list.map(function (c) {
      return '<li><a href="#/concept/' + c.slug + '">' + esc(c.title) + "</a> — <span class=\"muted\">" + esc(c.summary) + "</span></li>";
    }).join("") + "</ul>";
    var d = document.querySelector('details[data-tag="' + tagId(tag) + '"]');
    if (d) { $("tags-section").open = true; var p = d.parentElement.closest("details"); if (p) p.open = true; d.open = true; }
    markActive(null);
  }

  function route() {
    var h = decodeURIComponent(location.hash.replace(/^#\/?/, ""));
    if (h === "bok") return showBokHome();
    var m = h.match(/^bok\/(.+)$/);
    if (m) return showBok(m[1]);
    m = h.match(/^concept\/(.+)$/);
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
      var pages = index.map(function (c) { return { c: c, key: c.slug, href: "#/concept/" + c.slug, title: c.title }; })
        .concat(bok.map(function (b) { return { c: b, key: "bok/" + b.slug, href: "#/bok/" + b.slug, title: "Book of Knowledge · " + bokLabel(b) }; }));
      pages.forEach(function (p) {
        var c = p.c;
        var head = (c.title + " " + c.summary + " " + c.tags.join(" ")).toLowerCase();
        var body = text[p.key] || "";
        var score = 0;
        for (var i = 0; i < terms.length; i++) {
          var inHead = head.indexOf(terms[i]) !== -1;
          var inBody = body.indexOf(terms[i]) !== -1;
          if (!inHead && !inBody) return;
          score += (c.title.toLowerCase().indexOf(terms[i]) !== -1 ? 5 : 0) + (inHead ? 3 : 0) + (inBody ? 1 : 0);
        }
        scored.push({ c: c, p: p, s: score });
      });
      scored.sort(function (a, b) { return b.s - a.s; });
      box.innerHTML = scored.length
        ? scored.slice(0, 40).map(function (x) {
            return '<a href="' + x.p.href + '">' + esc(x.p.title) + "<small>" + esc(x.c.summary.slice(0, 110)) + "…</small></a>";
          }).join("")
        : '<p class="muted">No matches.</p>';
      box.hidden = false;
      $("nav").hidden = true;
    });
  }

  // ---------- Start ----------
  Promise.all([
    fetch("data/index.json").then(function (r) { return r.json(); }),
    fetch("data/bok.json").then(function (r) { return r.json(); })
  ])
    .then(function (data) {
      index = data[0];
      bok = data[1];
      index.forEach(function (c) { bySlug[c.slug] = c; });
      bok.forEach(function (b) { bokBySlug[b.slug] = b; });
      renderBokTree();
      renderConceptList();
      renderTagTree();
      route();
    });

  // ---------- Mobile drawer ----------
  var sidebar = document.querySelector(".sidebar");
  var overlay = $("sidebar-overlay");
  function openDrawer() { sidebar.classList.add("sidebar-open"); overlay.classList.add("sidebar-open"); document.body.style.overflow = "hidden"; }
  function closeDrawer() { sidebar.classList.remove("sidebar-open"); overlay.classList.remove("sidebar-open"); document.body.style.overflow = ""; }
  $("filter-toggle").addEventListener("click", function () {
    sidebar.classList.contains("sidebar-open") ? closeDrawer() : openDrawer();
  });
  overlay.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeDrawer(); });

  window.addEventListener("hashchange", function () {
    closeDrawer();
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
