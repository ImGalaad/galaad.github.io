---
title: 1.0 Introduction au langage C
layout: base.liquid

prev: /blog/c-fr/welcome
next: /blog/c-fr/installation
---

<!--

<section class="accordion">
    <input type="checkbox" checked>
    <h4>Lorem ipsum<i></i></h4>
<article>

</article>
</section>

-->

C est un langage généraliste développé par [Dennis Ritchie](https://en.wikipedia.org/wiki/Dennis_Ritchie) dans les années 1970. Il est conçu pour être efficace et portable, permettant ainsi de fonctionner sur de nombreux systèmes informatiques différents.

C'est un choix populaire pour la programmation système et d'autres applications où les performances sont critiques. Il est connu pour ses caractéristiques suivantes :

- **Portabilité** : C peut fonctionner sur de nombreux systèmes différents
- **Efficacité** : C produit des codes qui s'exécutent rapidement
- **Gestion de la mémoire à bas niveau** : C permet la manipulation directe de la mémoire
- **Programmation procédurale** : C met l'accent sur les procédures et les fonctions

C a eu un impact significatif sur l'informatique et la conception de logiciels, et est encore largement utilisé aujourd'hui.


<section class="accordion" optional>
    <input type="checkbox" checked>
    <h4>C pour les développeurs Python ou Ocaml<i></i></h4>
<article>

| Caractéristiques      | 🐍 Python | 🐫 OCaml | ⚙️ C |
|-----------------------|-----------|----------|-----|
| **Modèle d'exécution**    | Interprété (le bytecode s'exécute sur une [machine virtuelle](/blog/lexicon/vm)) | Compilé (en code natif ou bytecode pour le runtime OCaml) | Compilé (traduit en code machine) |
| **Gestion de la mémoire** | Automatique ([ramasse-miettes](/blog/lexicon/gc)) | Automatique ([ramasse-miettes](/blog/lexicon/gc)) | Manuelle (allocation et désallocation explicites) |
| **Typage**                | Dynamique (vérification de type à l'exécution) | Statique (fortement typé, avec inférence de type) | Statique (vérification de type à la compilation) |
| **Syntaxe**               | De haut niveau, simple et expressive | De haut niveau, concise, fonctionnelle et expressive | De bas niveau, verbeuse, avec structuration manuelle |
| **Bibliothèque standard** | Vaste et intégrée | Modérée, utilitaires fonctionnels et impératifs inclus | Minimale, repose sur des bibliothèques tierces |
| **Pointeurs**             | Non exposés directement | Non exposés directement, abstraits par valeurs et références | Concept fondamental pour la mémoire et l'adressage |
| **Gestion des erreurs**   | Exceptions | Exceptions et correspondance de motifs (gestion des erreurs expressive) | Codes de retour et indicateurs d'erreur |
| **Cas d'utilisation**     | Développement rapide, scripting, développement web | Programmation fonctionnelle, conception de compilateurs, preuve de théorèmes, analyse statique | Programmation système, systèmes embarqués, applications critiques en termes de performances | 

Inspirations: [Nim for Python Programmers](https://github.com/nim-lang/Nim/wiki/Nim-for-Python-Programmers)   
</article>
</section>

<!-- <section class="accordion" optional>
    <input type="checkbox" checked>
    <h4>C for Python or Ocaml devs<i></i></h4>
<article>

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

Inspiration: [Nim for Python Programmers](https://github.com/nim-lang/Nim/wiki/Nim-for-Python-Programmers)   
</article>
</section> -->


<!-- <section class="accordion">
    <input type="checkbox" checked>
    <h4>English version 🇬🇧<i></i></h4>
<article>

C is a general-purpose language developed by [Dennis Ritchie](https://en.wikipedia.org/wiki/Dennis_Ritchie) in the 1970s. It's designed to be efficient and portable, allowing it to run on many different computer systems.

It's a popular choice for systems programming and other applications where performance is critical. It's known for its:

- **Portability**: C code can run on many different systems
- **Efficiency**: C produces fast-running code
- **Low-level memory management**: C allows direct manipulation of memory
- **Procedural programming**: C emphasizes on procedures and functions

C has had a significant impact on computer science and software engineering, and is still widely used today.
</article>
</section> -->


Source: [Wikipedia](https://en.wikipedia.org/wiki/C_(programming_language))

<!--
## Roadmap

1. Introduction
    - History
    - Paradigm
    - Usage

2. Getting started
    - Installation / Environnement
    - Appearance (Hello World, with deep analysis)

3. Syntax
    - Main
    - Comments
    - Variables
        - Each instruction have a ; at the end
    - Data Types (different writing styles)
        - int
        - float (double!!)
        - char
        - Talk about strings
        - struct
        - enum
        - a word about conversions
    - Operators
    - Functions
        - Return type / keyword (void!!)
        - Parameters
        - a word about recursivity
        - (return and params are copies!!)
    - Control flow
        - if
        - while
        - for
        - do...while
        - switch
        - break/continue (banned!!)

4. Macros
    - Principe
    - #define
    - #include

5. Display
    - stdio
    - Inputs using scanf

6. Arrays
    - Definition
    - Limits
    - Usage
    - Usage with `for`
    - Multi-dimensional

7. Pointers
    - Definition
    - Principe
    - Operators (&, *)
    - Usage as parameters
    - Usage for custom arrays
    - stdlib
    - string

8. Memory Management
    - Introduction to memory management
    - Dynamic memory allocation (malloc, free)
    - Common pitfalls and best practices

9. Usage of main args
    - Little example

10. File system
    - fs
-->
