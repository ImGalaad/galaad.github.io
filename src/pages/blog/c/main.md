---
title: 3.1 Main
layout: base.liquid

prev: /blog/c/syntax
next: /blog/c/comments
---

Tout programme C commence par la fonction `main` ("principal" en anglais). C'est la fonction qui est appelée lorsque le programme est exécuté.
<br>

En C, on ne code presque jamais en dehors de fonctions. En Ocaml ou Python, il n'y a pas besoin de `main` car tout le code qui est écrit s'exécute, mais ici, chaque expression est écrite dans le `main` ou une autre fonction.
<br>

Voici un exemple de code minimal :
```c
int main() {
    return 0;
}
```
> *Ce code ne fait rien, à part retourner 0*

<section class="accordion">
    <input type="checkbox" checked>
    <h4>Note<i></i></h4>
<article>

En réalité nous pouvons faire moins, mais il est fortement conseillé d'utiliser `int` en valeur de retour et explicitement retourner la valeur.

Dans ce cours nous allons apprendre à coder avec des conventions - dont le retour explicite et la compatibilité pour tous les systèmes en font partis - afin de produire du code **lisible**, **expressif** et de **qualité**.
</article>
</section>

