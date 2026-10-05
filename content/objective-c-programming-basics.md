## Summary

Objective-C extends the C language with objects and messaging, and its core concepts are memory management, the class, object and method model, and the system of frameworks and header files. In the introductory text by Aaron Hillegass and Mikey Ward, a program runs through functions whose local variables live on the stack and disappear when the function returns, so data that must outlive a function is placed on the heap. Automatic reference counting tracks how many references point to each heap object and destroys it when the count reaches zero, which removes the manual bookkeeping of earlier versions. A class acts both as a blueprint for objects and as an object itself, sending a message to nil is legal and does nothing, and a framework such as Apple's Foundation bundles related classes and functions.

## Highlights

- A program executes via functions, each with its own frame of local variables stored on the stack; when a function returns, its frame is discarded, which is why a buffer that needs to survive beyond the function that created it must instead be allocated on the heap. <span class="src">Objective-C Programming</span>
- An object is analogous to a C struct extended with its own functions (methods): a class defines both the instance variables and methods an object of that type will have, acting simultaneously as a blueprint (describing the type) and a factory (producing instances of it). <span class="src">Objective-C Programming</span>
- Automatic Reference Counting (ARC) tracks how many references point to each heap-allocated object and automatically destroys the object once that count reaches zero, removing the need for the manual reference-count bookkeeping earlier Objective-C developers had to perform themselves. <span class="src">Objective-C Programming</span>
- Sending a message to `nil` (Objective-C's null-object pointer) is explicitly legal and simply does nothing, returning a value that should be treated as meaningless — a deliberate language design choice distinct from languages where messaging a null reference raises an error. <span class="src">Objective-C Programming</span>
- A framework bundles a set of related classes, functions, constants, and types (e.g. Apple's Foundation framework); `#import` differs from the C `#include` directive by first checking whether a file has already been imported elsewhere, avoiding the duplicate-inclusion errors a plain `#include` can cause. <span class="src">Objective-C Programming</span>

## Concept

This source is an introductory programming text covering C and Objective-C fundamentals: variable declaration and typing, control flow, functions and the stack-based frame model that stores their local variables, pointers and heap-allocated memory (used when data must outlive the function that created it), and the transition from C's struct-based data modeling into Objective-C's object model, where a class combines a struct's grouped instance variables with its own methods, and where the class itself acts as both a blueprint describing a type and a factory producing new instances of it via its `alloc`/`init` pattern. Memory management on the heap is handled through Automatic Reference Counting (ARC), which tracks how many active references point to each object and automatically deallocates it once that count reaches zero, removing the need for the fully manual reference-count management earlier Objective-C code required; a related language-design detail is that sending a message to `nil` (Objective-C's null-object pointer, distinguished by convention from C's `NULL`) is explicitly legal and simply does nothing, rather than raising an error as it would in many other object-oriented languages. Above the level of individual objects, a framework (such as Apple's Foundation framework, prefixed `NS` for its NeXTSTEP origins) bundles a related set of classes, functions, constants, and types, and Objective-C's `#import` directive improves on C's plain `#include` by tracking which files have already been imported and skipping duplicate inclusion automatically. <span class="src">Objective-C Programming</span>

## Related

- [Data Mining Fundamentals](#/concept/data-mining-fundamentals) — No direct topical connection, but both are foundational technical-reference sources in this vault's Readwise/Books collection.

## Open Questions

- This source is a general programming-language reference with no clear thematic connection to this vault's predominant focus on AI, telecom, cloud, and business strategy; no existing vault tag fits it, so tags are left empty per CLAUDE.md's fallback rule.
- Only the book's early chapters (through basic memory management and the introduction to Objective-C objects) were captured in the highlights available for this ingest; later material on Foundation classes, collections, and iOS-specific APIs is not reflected here.

## Sources

- <span class="src">Objective-C Programming</span> — Aaron Hillegass and Mikey Ward's introductory text on C and Objective-C programming fundamentals.
