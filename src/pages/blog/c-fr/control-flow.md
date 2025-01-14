---
title: 3.5 Structures de contrôle
layout: base.liquid

prev: /blog/c-fr/functions
next: /blog/c-fr/macros
---

Les structures de contrôle sont des instructions qui permettent de se "déplacer" différement dans le code. Les structures de contrôle les plus courantes sont:

### if
Instruction conditionnelle qui permet de choisir entre plusieurs actions en fonction d'une condition. **N'oubliez pas de mettre votre condition entre parenthèses!**
```c
int x = 918;

if (x > 10) {
    printf("x est supérieur à 10\n");
}
```
> *Cet exemple affiche "x est supérieur à 10" car la condition x > 10 est vraie.*

Vous pouvez également utiliser `else` et `else if` pour ajouter des conditions supplémentaires:
```c
int x = 8;

if (x > 10) {
    printf("x est supérieur à 10\n");
}

else if (x == 8 || x == 9) {
    printf("x est 8 ou 9\n");
}

else {
    printf("x est inférieur à 5\n");
}
```
> *Cet exemple affiche "x est 8 ou 9" car la condition x > 10 est fausse et la condition x == 8 || x == 9 est vraie.*

<section class="accordion" optional>
    <input type="checkbox" checked>
    <h4>Petit +<i></i></h4>
<article>

L'opérateur conditionnel ternaire permet d'avoir un `if`/`else` en une seule ligne:
```c
a ? b : c
```

Cela équivaut en Python à:
```py
b if a else c
```

Ou en Ocaml:
<pre class="language-ml"><code class="language-ml"><span class="token keyword">if</span> a <span class="token keyword">then</span> b <span class="token keyword">else</span> c</code></pre>


Source: [Wikipedia](https://en.wikipedia.org/wiki/Ternary_conditional_operator)
</article>
</section>

<br>
<br>

### while
Instruction de répétition qui permet de répéter une action tant qu'une condition est vraie.
```c
int x = 0;

while (x < 5) {
    printf("Bonjour !\n");
    x += 1;
}
```
> *Cet exemple affiche "Bonjour !" 5 fois.*

<br>
<br>

### for
Instruction de répétition qui permet de répéter une action un certain nombre de fois.
```c
for (int x = 0; x < 10; x++) {
    printf("x est égal à %d\n", x);  // %d est remplacé par la valeur de x
}
```
> *Cet exemple affiche "Bonjour !" 10 fois.*

La boucle `for` est composée de trois parties:
- **L'initialisation** : c'est la définition d'une variable (pas forcément un `int`) qui sera utilisée pour contrôler la boucle. Dans cet exemple, `x` est initialisé à 0.
- **La condition** : c'est la condition qui doit être vraie pour que la boucle continue. Dans cet exemple, la condition est `x < 10`.
- **La mise à jour** : c'est l'opération qui est effectuée à chaque itération de la boucle. Dans cet exemple, `x` est incrémenté de 1 à chaque itération.

<section class="accordion" optional>
    <input type="checkbox" checked>
    <h4>Équivalent en Python & Ocaml<i></i></h4>
<article>

Python:
```py
for x in range(0, 10):
    print("x est égal à", x)
```
> Notes: la boucle `for` de C peut mentalement être simplifiée: <br>
> *for x in range(`début`, `fin`)* <br>
> par <br>
> *for (int x = `début`; x < `fin`; x++)*

Ocaml:
<pre class="language-ml"><code class="language-ml"><span class="token keyword">for</span> x <span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">to</span> <span class="token number">10</span> <span class="token keyword">do</span>
    <span class="token function">print_string</span> <span class="token string">"x est égal à "</span><span class="token punctuation">;</span>
    <span class="token function">print_int</span> x<span class="token punctuation">;</span>
    <span class="token function">print_newline</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">done</span></code></pre>

</article>
</section>

<br>
<br>

### switch
Instruction de sélection qui permet de choisir entre plusieurs actions en fonction d'une valeur et peut éviter de trop utiliser `if` et `else`. **Ne pas oublier le break à la fin de chaque cas!**
```c
int x = 2;

switch (x) {
    case 1:
        printf("x est égal à 1\n");
        break;

    case 2:
        printf("x est égal à 2\n");
        break;

    default:
        printf("x est différent de 1 et 2\n");
        break;
}
```
> *Cet exemple affiche "x est égal à 2".*

<br>
<br>

### break
Instruction de sortie qui permet de sortir d'une boucle ou d'une instruction de sélection (comme en Python). **N'est pas autorisé à l'Université de Poitiers!**
```c
for (int x = 0; x < 10; x++) {
    if (x == 5) {
        break;
    }
    printf("%d\n", x);
}
```
> *Cet exemple affiche les valeurs de x de 0 à 4.*

<br>
<br>

### continue
Instruction de poursuite qui permet de passer à l'itération suivante d'une boucle (comme en Python). **N'est pas autorisé à l'Université de Poitiers!**
```c
for (int x = 0; x < 10; x++) {
    if (x == 5) {
        continue;
    }
    printf("%d\n", x);
}
```
> *Cet exemple affiche les valeurs de x de 0 à 9 à part 5.*

<section class="accordion" optional>
    <input type="checkbox" checked>
    <h4>Petit +<i></i></h4>
<article>

### do...while
Instruction de répétition comme `while` mais la condition est vérifiée à la fin plutôt qu'au début, peut être utile dans certains cas spécifiques.
```c
int x = 0;

do {
    x++;
    printf("%d\n", x);
} while (x < 10);
```
> *Cet exemple affiche les valeurs de x de 1 à 10.*
</article>
</section>
