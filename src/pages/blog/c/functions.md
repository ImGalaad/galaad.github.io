---
title: 3.4 Functions
layout: base.liquid

prev: /blog/c/variables
next: /blog/c/control-flow
---

Les fonctions sont des blocs de code qui peuvent être appelés plusieurs fois dans un programme. Elles sont déclarées avec un type de retour, un nom et des paramètres. Voici un exemple:
```c
int multiplication(int x, int y) {
    return x * y;
}
```
Dans cet exemple, la fonction `multiplication` est déclarée avec le type de retour `int` et les paramètres `x` et `y`. La fonction retourne tout simplement le produit de `x` et `y`. Bien-sûr, ce n'est qu'un exemple pour comprendre comment construire une fonction, n'utilisez pas cette fonction à chaque fois que vous multipliez deux `int`, utilisez simplement `*`.
<br>

<section class="accordion" optional>
    <input type="checkbox" checked>
    <h4>Équivalent en Python & Ocaml<i></i></h4>
<article>

Python:
```py
def multiplication(x, y):
    return x * y
```

Ocaml:
```ml
let multiplication(x, y : int * int) : int =
    x * y
;;
```
> Notes: Alors qu'Ocaml utilise comme valeur de retour la dernière expression, C (et aussi Python) utilise le mot `return`
</article>
</section>
<br>

Les fonctions peuvent également être récursives, c'est-à-dire qu'elles peuvent s'appeler elles-mêmes. *Vous n'avez pas à ajouter `rec`, C est intelligent et comprend que vous appelez la fonction que vous définissez.* Voici un exemple:
```c
int facto(int x) {
    if (x == 0) {
        return 1;
    }
    
    else {
        return x * facto(x - 1);
    }
}
```
Dans cet exemple, la fonction `facto` est déclarée avec le type de retour `int` et le paramètre `x`. La fonction retourne la factorielle de `x`.

<section class="accordion" optional>
    <input type="checkbox" checked>
    <h4>Équivalent en Python & Ocaml<i></i></h4>
<article>

Python:
```py
def facto(x):
    if x == 0:
        return 1
    else:
        return x * facto(x - 1)
```

Ocaml:
```ml
let rec facto(x : int) : int =
    if x = 0 then
        1
    else
        x * facto(x - 1)
;;
```
</article>
</section>
