---
title: 3.3 Variables
layout: base.liquid

prev: /blog/c/comments
next: /blog/c/functions
---

Les variables sont des espaces qui permettent de stocker des valeurs. En C, les variables sont déclarées avec un type, un nom et une valeur; la valeur peut être modifiée à tout moment, contrairement à Ocaml. Voici un exemple :
```c
int x = 42;
```
Dans cet exemple, la variable `x` est déclarée avec le type `int` et la valeur `42`. La syntaxe suit donc ce paterne `type nom = valeur;`. <br>

<section class="accordion">
    <input type="checkbox" checked>
    <h4>Équivalent en Python & Ocaml<i></i></h4>
<article>

Python:
```py
x = 42
```

Ocaml:
```ml
let x: int = 42;;
```
</article>
</section>

<br>

Les types de données les plus courants en C sont :
- `int` : entier
- `float` : nombre à virgule flottante
- `char` : caractère ([ASCII](https://fr.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange))
- `struct` : structure de données
- `enum` : énumération

<section class="accordion">
    <input type="checkbox" checked>
    <h4>Petit +<i></i></h4>
<article>

Il n'y a pas de type `string` à proprement parlé, si nous voulons créer une chaîne de caractères, nous devons la définir plus précisement pour la mémoire. En général, elles sont représentées par un tableau de caractères, comme ceci:
```c
char nom[] = "Heisenberg";
```
Ici nous avons utilisé `char`, malheureusement ce n'est qu'un seul caractère, pas suffisant pour écrire Heisenberg, alors nous ajoutons `[]` après le nom de la variable pour définir un `array`, mais il faut attendre 3 chapitres pour plus d'explications ;)
</article>
</section>
<br>

*À noter qu'il n'y a pas non plus de booléen par défaut, mais vous pourrez utiliser `#include <stdbool.h>` pour avoir `true` et `false`.*
<br>

Les conversions de types sont également possibles en C. Par exemple, on peut convertir un entier en nombre à virgule flottante:
```c
int x = 87;
float y = (float)x;  // cela donnera la valeur 87.0
```
<!-- Et non 5.0 ptdr -->
Sachez que certaines conversions sont faites automatiquement, cela s'appelle la conversion "implicite". Dans ce cours nous allons au maximum l'éviter car ça rend le code moins compréhensible et peut même le rendre mauvais.
<br>

Les opérateurs sont utilisés pour effectuer des opérations sur les variables. Les opérateurs les plus courants sont:
- `+` : addition
- `-` : soustraction
- `*` : multiplication
- `/` : division
- `%` : modulo
<br>

Toutes les opérations sont faites avec 2 valeurs de même type (deux `int` ou encore deux `float`).
<br>

Il existe pour chaque opérateur une version dite "immédiate", cela veut dire qu'on applique direment l'opération sur la variable. Voici un exemple:
```c
int x = 420;

// Ces deux instructions sont équivalentes
x = x + 1;
x += 1;
```
Nous pouvons même utiliser l'opérateur `++` et `--` pour compacter encore plus le code, mais ça peut rendre le code moins lisible...:
```c
int y = 70;
y--;  // Équivalent à y -= 1;
```
