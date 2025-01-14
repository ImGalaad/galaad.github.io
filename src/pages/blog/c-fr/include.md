---
title: "4.1 #include"
layout: base.liquid

prev: /blog/c-fr/macros
next: /blog/c-fr/define
---

Comme nous l'avons vu au "Hello, World!", nous pouvons importer un fichier C avec `#include <stdio.h>`, cela veut dire que le compilateur va effectuer une sorte de copier/coller<!-- copi/coli -->, la ligne sera remplacée par le contenu du fichier `stdio.h`.

Il y a deux types d'inclusion, celle spécifiquement pour les librairies de C (comme **stdio.h**) avec `<...>` et celle standard avec `"..."`, avec celle-ci vous pourrez importer vos propres fichiers. *Il est possible d'inclure une librairie C en utilisant `"..."`, mais nous le ferons pas par convention.*

Voici un exemple d'utilisation:
```c
#include <stdlib.h>

#include "utils.h"  // Fichier théorique de votre repertoire
```

<section class="accordion" optional>
    <input type="checkbox" checked>
    <h4>Quelques librairies de C<i></i></h4>
<article>

- `<stdlib.h>`: gestion de la mémoire & autre
- `<stdio.h>`: gestion des entrées/sorties
- `<math.h>`: fonctions mathématiques comme `abs`, `log` ou encore `sin`
- `<string.h>`: gestion des char* & mémoire
- `<stdbool.h>`: pour `true` & `false`
- `<time.h>`: gestion du temps
</article>
</section>

Source: [Wikipedia](https://fr.wikipedia.org/wiki/Pr%C3%A9processeur_C)
