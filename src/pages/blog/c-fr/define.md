---
title: "4.2 #define"
layout: base.liquid

prev: /blog/c-fr/include
next: /blog/c-fr/io
---

La macro `#define` permet de définir (et oui!) du texte à remplacer pendant la compilation, comme avec `#include` mais ici c'est un simple texte:

```c
#include <stdio.h>

#define PI 3.14159

int main() {
    printf("π = %f", PI);

    return 0;
}
```

<section class="accordion">
    <input type="checkbox" checked>
    <h4>Attention!<i></i></h4>
<article>

Ici `PI` n'est pas une variable, c'est seulement du texte, la ligne se transformera en:
```c
printf("π = %f", 3.14159);
```
</article>
</section>

Nous pouvons aussi ajouter des arguments et même des expressions:
```c
#define MAX(a, b) a > b ? a : b
```
*Ici `MAX(1, 2)` sera remplacé par `1 > 2 ? 1 : 2` (donc `2`).* <br>
*Cela permet d'avoir une sorte de fonction sans type, donc utilisable avec des `int` et `float`.*

<section class="accordion">
    <input type="checkbox" checked>
    <h4>Attention!<i></i></h4>
<article>

C étant un langage assez vieux, les messages d'erreur ne sont pas minimalistes, donc vous pourrez très vite avoir ce genre de message:

<pre><code>
main.c: In function ‘main’:
main.c:1:21: <span class="token deleted">error</span>: invalid operands to binary > (have ‘Human’ and ‘Human’)
    1 | #define MAX(a, b) a <span class="token deleted">></span> b ? a : b
      |                     <span class="token deleted">^</span>
main.c:11:23: <span class="token entity">note</span>: in expansion of macro ‘MAX’
   11 |     Human greatest = <span class="token entity">MAX</span>(bob, jakeulineu);
      |                      <span class="token entity">^~~</span>
</code></pre>

*Certes, ici ce n'est pas si horrible que ça car il n'y a qu'une seule erreur dans une seule macro, mais ça peut très vite être un bazar.*
(l'erreur ici c'est que l'opérateur `>` n'est pas compatible avec `Human` et `Human`)
</article>
</section>

<section class="accordion" optional>
    <input type="checkbox" checked>
    <h4>Notes<i></i></h4>
<article>

Il y a d'autres macros, comme celles appelées "pragma" ou encore celles qui permettent d'avoir des conditions avec `#IF` et `#ELSE`; mais nous n'allons pas les utiliser.

*Si l'Université de Poitiers les intègre dans leur cours, je le ferai aussi pour y être conforme.*
</article>
</section>

Source: [Wikipedia](https://fr.wikipedia.org/wiki/Pr%C3%A9processeur_C)
