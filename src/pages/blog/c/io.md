---
title: 5. I/O
layout: base.liquid

prev: /blog/c/macros
next: /blog/c/arrays
---

L'entrée/sortie (I/O, "input/output" en anglais) est un concept fondamental en programmation qui permet à un programme de communiquer avec l'utilisateur ou avec d'autres programmes (par exemple avec l'[OS](/blog/lexicon/os)). Comme nous l'avons vu dans le chapitre précedent, C contient la librairie **stdio.h** qui permet de gérer l'I/O. Nous n'allons définir et expliquer que deux fonctions dans ce chapitre.

### printf
La fonction `printf` permet d'afficher des messages sur la console. Elle n'a pas de limite du nombre d'arguments, le premier est un `char[]`, il décrit le format final:
```c
printf("Avec ses pneus profilés, qui adhèrent au bitume comme le bigorneau adhère au rocher...");
```

La "chaîne de format" peut contenir des **spécificateurs** qui indiquent le type de données à afficher. Voici quelques-uns des spécificateurs de format pour les types les plus courants:
- `%d` ou `%i`: int
- `%f`: float
- `%c`: char
- `%s`: char[]

Voici un exemple d'utilisation avec plusieurs arguments:
```c
#include <stdio.h>

int main() {
    int age = 43;
    float weight = 82.8;  // "poids" en anglais
    char name[] = "Jean";

    printf("Je m'appelle %s et j'ai %d ans. Je pèse %.2f kg.\n", name, age, weight);

    return 0;
}
```
Cela affiche:
```
Je m'appelle Jean et j'ai 43 ans. Je pèse 82.80 kg.
```

*Note: Vous devez voir que le spécificateur du poids est `%.2f` et non `%f`, cela permet de n'afficher que 2 nombres après la virgule, puisqu'un `float` a une précision, C va afficher tous les nombres possibles après la virgules, donc on simplifie l'affichage comme ça!*

<section class="accordion" optional>
    <input type="checkbox" checked>
    <h4>Équivalent en Python<i></i></h4>
<article>

```py
age = 43
weight = 82.8
name = "Jean"

print(f"Je m'appelle {name} et j'ai {age} ans. Je pèse {weight:.2f} kg.")
```
</article>
</section>

### scanf

La fonction `scanf` quant à elle fait "l'inverse" car elle demande dans la console d'entrer du texte.

Voici un exemple d'utilisation:
```c
#include <stdio.h>

int main() {
    int age;
    
    printf("Entrez votre âge : ");
    scanf("%d", &age);
    printf("Vous avez %d ans.\n", age);  // Perspicace!

    return 0;
}
```
Ici le programme demande à l'utilisateur d'entrer un nombre entier dans la console (avec `scanf`) avec un petit message (avec `printf`). Vous voyez le petit symbole `&` juste avant `age` ? Et bien nous le verrons dans le chapitre sur les pointeurs, n'ayez pas peur c'est plus simple qu'on peut le croire!

*Note: La fonction `scanf` peut être "dangeureuse", car si on ne rentre pas une valeur correcte, l'ordinateur ne va pas être content. Heureusement les systèmes d'opération modernes savent très bien gérer ces problèmes, mais ce n'est pas une raison pour ne pas réflechir aux éventualités de crash.*

<section class="accordion" optional>
    <input type="checkbox" checked>
    <h4>Équivalent en Python<i></i></h4>
<article>

```py
age = int(input("Entrez votre âge : "))
print(f"Vous avez {age} ans.")
```
</article>
</section>

<!-- Source: [Wikipedia](https://fr.wikipedia.org/wiki/Io_(lune)) (pèse 8.93 x 10^22 kg quand même!) -->
