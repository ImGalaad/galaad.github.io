---
title: 3.3 Variables
layout: base.liquid

prev: /blog/c-fr/comments
next: /blog/c-fr/functions
---

Les variables sont des espaces qui permettent de stocker des valeurs. En C, les variables sont déclarées avec un type, un nom et une valeur; la valeur peut être modifiée à tout moment, contrairement à Ocaml. Voici un exemple:
```c
int x = 42;
```
Dans cet exemple, la variable `x` est déclarée avec le type `int` et la valeur `42`. La syntaxe suit donc ce paterne `type nom = valeur;`. <br>

<section class="accordion" optional>
    <input type="checkbox" checked>
    <h4>Équivalent en Python & Ocaml<i></i></h4>
<article>

Python:
```py
x = 42
```

Ocaml:
<pre class="language-ml"><code class="language-ml"><span class="token keyword">let</span> x <span class="token punctuation">:</span> <span class="token keyword">int</span> <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;;</span></code></pre>
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
    <h4>struct<i></i></h4>
<article>

Les types structurés sont comme ceux en Ocaml:
```c
struct Human {
    int age;
    float height;
};
```
**Utilisation:**
```c
struct Human bob = { .age = 24, .height = 847.0 };
```

Human n'est pas directement un type, nous pouvons le voir grâce au `struct` juste avant `Human`. Afin de ne pas avoir à mettre à chaque fois `struct`, nous pouvons utiliser `typedef`:
```c
typedef struct Human {
    int age;
    float height;
} Human;

Human jean = { .age = 73, .height = 176.0 };
```
C'est bien plus clair! <br>
*Ici, le premier `Human` définit le nom de la structure de donnée (optionel), et le deuxième est le nom du type.*

Voici comment accéder à un élement de la structure:
```c
jean.age;  // donne ici 73
```
</article>
</section>

<section class="accordion">
    <input type="checkbox" checked>
    <h4>enum<i></i></h4>
<article>

Pareil que pour `struct`, c'est comme en Ocaml:
```c
enum Days {
    Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
};
```
*La représentation en mémoire est simplement un entier, de 0 à 6 ici.*

**Utilisation:**
```c
enum Days day = Sunday;
```
</article>
</section>

<section class="accordion" optional>
    <input type="checkbox" checked>
    <h4>Et les strings ?<i></i></h4>
<article>

Il n'y a pas de type `string` à proprement parler, si nous voulons créer une chaîne de caractères, nous devons la définir plus précisement pour la mémoire. En général, elles sont représentées par un tableau de caractères, comme ceci:
```c
char nom[] = "Heisenberg";
```
Ici nous avons utilisé `char`, malheureusement ce n'est qu'un seul caractère, pas suffisant pour écrire "Heisenberg", alors nous ajoutons `[]` après le nom de la variable pour définir un `array`. *Mais il faut attendre le chapitre 6.0 pour plus d'explications ;)*
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

<section class="accordion">
    <input type="checkbox" checked>
    <h4>Opérateurs<i></i></h4>
<article>

Les opérateurs sont utilisés pour effectuer des opérations sur les variables. Les opérateurs les plus courants sont:
- `+` : addition
- `-` : soustraction
- `*` : multiplication
- `/` : division
- `%` : modulo
<br>

Toutes les opérations sont faites avec 2 valeurs de même type (deux `int` ou encore deux `float`).
<br>

De plus, il existe des opérateurs binaires afin d'effectuer des opérations qui retournent des booléens (donc des `int` en C). Les opérateurs binaires les plus courants sont:
- `==` : est égal à
- `!=` : n'est pas égal à
<br>
<br>

- `>` : plus grand que
- `<` : plus petit que
- `>=` : plus grand ou égal à
- `<=` : plus petit ou égal à
<br>
<br>

- `!` : [NOT](https://fr.wikipedia.org/wiki/Fonction_NON)
- `&&` : [AND](https://fr.wikipedia.org/wiki/Fonction_ET)
- `||` : [OR](https://fr.wikipedia.org/wiki/Fonction_OU)
- `^` : [XOR](https://fr.wikipedia.org/wiki/Fonction_OU_exclusif)


Il existe pour chaque opérateur une version dite "immédiate", cela veut dire qu'on applique directement l'opération sur la variable:
```c
int x = 420;

x += 26;  // Équivalent à x = x + 26;
x %= 34;  // Équivalent à x = x % 34;
x &= 42;  // Équivalent à x = x & 42;
```
Nous pouvons même utiliser l'opérateur `++` et `--` pour compacter encore plus le code, mais ça peut rendre le code moins lisible...:
```c
int y = 70;
y--;  // Équivalent à y -= 1;
```

</article>
</section>
