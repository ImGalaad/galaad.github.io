---
title: 6.0 Arrays
layout: base.liquid

prev: /blog/c-fr/io
next: /blog/c-fr/pointers
---

## WIP

<br>
<br>
<br>
<br>

### Définition
Un array ("tableau" en anglais) est une structure de données contenant des valeurs. Voici comment nous définissons un array en C:
```c
int nombres_premiers[] = { 2, 3, 5, 7, 11, 13, 17, 19 };
```

<section class="accordion">
    <input type="checkbox" checked>
    <h4>Attention!<i></i></h4>
<article>

Nous devons écrire `[]` après le nom de la variable. Pourquoi ? Car C est vieux...
</article>
</section>
<br>
<br>

### Limites
Les arrays sont des structures assez limitées, ils sont de taille constante et les valeurs ont le même type.
<br>
<br>

### Usage

Pour accéder à un élément, nous utilisons `[...]`:
```c
int x = nombres_premiers[4];  // 11
```
*Comme les listes en Python ou Ocaml, un array commence par l'index 0.*

Et nous pouvons modifier un élément avec:
```c
nombres_premiers[6] = 666;
// nombres_premiers: { 2, 3, 5, 7, 11, 13, 666, 19 }
```

### Itération
Nous pouvons itérer dans cet array grâce à une boucle `for`:
```c
for (int i = 0; i < 8; i += 1) {
    printf("%d\n", nombres_premiers[i]);
}
```

### Itération Multi-Dimensionnelle
Pour définir un array à 2 dimensions, nous écrivons:
