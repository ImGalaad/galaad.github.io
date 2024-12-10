---
title: Foundations of C
layout: base.liquid
---

## Work In Progress

---

__C for Python & Ocaml devs__

Inspiration: [Nim for Python Programmers](https://github.com/nim-lang/Nim/wiki/Nim-for-Python-Programmers)

| Feature | 🐍 Python | 🐫 OCaml | ⚙️ C |
|---|---|---|---|
| **Execution model** | Interpreted (bytecode runs on a [virtual machine](/blog/lexicon/vm)) | Compiled (to native code or bytecode for the OCaml runtime) | Compiled (translates to machine code) |
| **Memory management** | Automatic ([garbage collection](/blog/lexicon/gc)) | Automatic ([garbage collection](/blog/lexicon/gc)) | Manual (explicit allocation and deallocation) |
| **Typing** | Dynamic (type checked at runtime) | Static (strongly typed, with type inference) | Static (type checked at compile time) |
| **Syntax** | High-level, simple, and expressive | High-level, concise, functional, and expressive | Low-level, verbose, with manual structuring |
| **Standard library** | Extensive and built-in | Moderate, functional and imperative utilities included | Minimal, relies on third-party libraries |
| **Pointers** | Not directly exposed | Not directly exposed, abstracted by values and references | Core concept for memory and addressing |
| **Error handling** | Exceptions | Exceptions and pattern matching (expressive error handling) | Return codes and error flags |
| **Use case** | Rapid development, scripting, web development | Functional programming, compiler design, theorem proving, static analysis | Systems programming, embedded systems, performance-critical applications |

---

### Set Up Environment
- Installation for Linux, MacOS & Windows
- Choosing an IDE (the examples will be on vscode)
- Terminal-based compilation using `gcc main.c -o main`

### Basic Syntax and Structure
- `main()` function & `include` macros
- Basic I/O usage with `printf` (first Hello, World!)
- Basic types (`int`, `float`, `char`)
- Variables & constants

### Control Structures
- If/else branches
- For/while loops
- (For Ocaml fanatics) Switch statement

### Functions
- Define & call functions
- Pass arguments by value & reference
- Return values