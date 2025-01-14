---
title: 6.0 Arrays
layout: base.liquid

prev: /blog/c-fr/io
next: /blog/c-fr/pointers
---

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

### Limites
Les arrays sont des structures assez limitées, ils sont de taille constante et les valeurs ont le même type.

De plus, nous ne devons pas essayer d'accéder à des éléments en dehors de sa taille, sinon ça fera crash le programme.
<br>
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

<!-- <section class="accordion">
    <input type="checkbox" checked>
    <h4>Attention!<i></i></h4>
<article>

Il est possible de faire crash le programme si vous accédez à un élément en dehors de l'array. Vérifiez bien que vous ne dépacez pas la taille de ce dernier.
</article>
</section> -->
<br>

### Itération
Nous pouvons itérer dans cet array grâce à une boucle `for`:
```c
for (int i = 0; i < 8; i++) {
    printf("%d\n", nombres_premiers[i]);
}
```

<br>
<br>

### Array Multi-Dimensionnel
Un array à 2 dimensions s'écrit:
```c
int nombres_premiers_2d[2][4] = {
    { 2, 3, 5, 7 },
    { 11, 13, 17, 19 }
};
// Pourquoi le mettre en 2D ? Pourquoi pas ? Je n'ai pas trouvé d'autres exemples
```
*Ici nombres_premiers_2d a 2 lignes et 4 colonnes.*

Pour y accéder, nous utilisons deux `[]`:
```c
int x = nombres_premiers_2d[1][2];  // 17
```

Nous pouvons itérer dans un array 2D avec deux boucles `for`:
```c
for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 4; j++) {
        printf("%d ", nombres_premiers_2d[i][j]);
    }
    printf("\n");
}
```
*Les variables i et j vont rendre nostalgique les Python-ers hehe.* <br>
*Ici le premier `printf` ne fait pas de saut à la ligne, seulement un espace pour séparer les valeurs. Par contre le deuxième affiche bel et bien une nouvelle ligne avec `\n`.*
Cela affichera:
```
2 3 5 7 
11 13 17 19
```
