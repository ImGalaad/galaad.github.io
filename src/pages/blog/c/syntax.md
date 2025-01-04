---
title: 3. Syntax
layout: base.liquid
---

Dans ce chapitre, nous allons explorer les éléments de base de la syntaxe C, tels que les variables, les fonctions, les commentaires et les structures de contrôle.

## 1. Le code minimal
Tout programme C commence par la fonction `main`. C'est la fonction qui est appelée lorsque le programme est exécuté. Voici un exemple de code minimal :
```c
int main() {
    return 0;
}
```
*En réalité nous pouvons faire moins, mais il est fortement conseillé d'utiliser `int` en valeur de retour.*

## 2. Les variables
Les variables sont des espaces qui permettent de stocker des valeurs. En C, les variables sont déclarées avec un type, un nom et une valeur; la valeur peut être modifiée à tout moment, contrairement à Ocaml. Voici un exemple :
```c
int x = 42;
```
Dans cet exemple, la variable `x` est déclarée avec le type `int` et la valeur `42`. La syntaxe suit donc ce paterne `type nom = valeur;`. <br>
<br>

Les types de données les plus courants en C sont :
- `int` : entier
- `float` : nombre à virgule flottante
- `char` : caractère ([ASCII](https://fr.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange))
- `struct` : structure de données
- `enum` : énumération

Il n'y a pas de type `string` à proprement parlé, si nous voulons créer une chaîne de caractères, nous devons la définir plus précisement pour la mémoire. En général, elles sont représentées par un tableau de caractères, comme ceci:
```c
char nom[] = "Heisenberg";
```
Ici nous avons utilisé `char`, malheureusement ce n'est qu'un seul caractère, pas suffisant pour écrire Heisenberg, alors nous ajoutons `[]` après le nom de la variable pour définir un `array`, mais il faut attendre 3 chapitres pour plus d'explications ;)
<br>

*À noter qu'il n'y a pas non plus de booléen par défaut, mais vous pourrez utiliser `#include <stdbool.h>` pour avoir `true` et `false`.*
<br>

Les conversions de types sont également possibles en C. Par exemple, on peut convertir un entier en nombre à virgule flottante:
```c
int x = 87;
float y = (float)x;  // cela donnera la valeur 5.0
```
Sachez que certaines conversions sont faites automatiquement, cela s'appelle la conversion "implicite". Dans ce cours nous allons au maximum l'éviter car ça rend le code moins compréhensible et peut même le rendre mauvais.
<br>

Les opérateurs sont utilisés pour effectuer des opérations sur les variables. Les opérateurs les plus courants sont:
- `+` : addition
- `-` : soustraction
- `*` : multiplication
- `/` : division
- `%` : modulo
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

## 3. Les fonctions
Les fonctions sont des blocs de code qui peuvent être appelés plusieurs fois dans un programme. Elles sont déclarées avec un type de retour, un nom et des paramètres. Voici un exemple:
```c
int multiplication(int x, int y) {
    return x * y;
}
```
Dans cet exemple, la fonction `multiplication` est déclarée avec le type de retour `int` et les paramètres `x` et `y`. La fonction retourne tout simplement le produit de `x` et `y`. Bien-sûr, ce n'est qu'un exemple pour comprendre comment construire une fonction, n'utilisez pas cette fonction à chaque fois que vous multipliez deux `int`, utilisez simplement `*`.
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

## 4. Les commentaires
Utilisez les commentaires pour annoter le code et expliquer ce qu'il fait. Voici un exemple:
```c
char horty[] = "HortyUnderscore";  // Ceci est la meilleure streameuse au monde
```

Les commentaires peuvent également être utilisés pour commenter plusieurs lignes de code en utilisant `/*` & `*/`. Voici un exemple:
```c
/*
    Deserunt duis sunt fugiat ea do sint enim sunt Lorem qui labore laboris.
    Minim nostrud nulla duis culpa eu fugiat ea voluptate quis fugiat ex.
    Commodo et deserunt magna laborum officia minim do cillum ullamco tempor.
*/
```

## 5. Les structures de contrôle
Les structures de contrôle sont des instructions qui permettent de se "déplacer" différement dans le code. Elles sont essentielles dans beaucoup de cas. Les structures de contrôle les plus courantes sont:

### if
Instruction conditionnelle qui permet de choisir entre plusieurs actions en fonction d'une condition. **N'oubliez pas de mettre votre condition entre parenthèses!**
```c
int x = 918;

if (x > 10) {
    printf("x est supérieur à 10\n");
}
```
> *Cet exemple affiche "x est supérieur à 10" car la condition x > 10 est vraie.*

Vous pouvez également utiliser `else` ou `else if` pour ajouter des conditions supplémentaires:
```c
int x = 8;

if (x > 10) {
    printf("x est supérieur à 10\n");
}

else if (x > 5) {
    printf("x est entre 6 et 10\n");
}

else {
    printf("x est inférieur à 5\n");
}
```
> *Cet exemple affiche "x est entre 5 et 10" car la condition x > 10 est fausse et la condition x >= 8 est vraie.*

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

### switch
Instruction de sélection qui permet de choisir entre plusieurs actions en fonction d'une valeur et d'éviter de trop utiliser `if` et `else`.
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

### break
Instruction de sortie qui permet de sortir d'une boucle ou d'une instruction de sélection.
```c
for (int x = 0; x < 10; x++) {
    if (x == 5) {
        break;
    }
    printf("x est égal à %d\n", x);
}
```
> *Cet exemple affiche les valeurs de x de 0 à 4.*

### continue
Instruction de poursuite qui permet de passer à l'itération suivante d'une boucle.
```c
for (int x = 0; x < 10; x++) {
    if (x == 5) {
        continue;
    }
    printf("x est égal à %d\n", x);
}
```
> *Cet exemple affiche les valeurs de x de 0 à 9 à part 5.*

<section class="accordion">
    <input type="checkbox" checked>
    <h4>Petit +<i></i></h4>
<article>

### do...while
Instruction de répétition comme `while` mais la condition est vérifiée à la fin plutôt qu'au début, peut être utile dans certains cas spécifiques.
```c
int x = 0;

do {
    printf("x est égal à %d\n", x);
    x++;
} while (x < 10);
```    
</article>
</section>

<!--

Basic introduction

## 1. Minimal code
- main function

## 2. Variables
- type name = expression;
- some data types
    - int
    - float (double!!)
    - char
    - Talk about strings
    - struct
    - enum
    - a word about conversions
- operators

## 3. Functions
- Return type / keyword (void!!)
- Parameters
- a word about recursivity
- (return and params are copies!!)

## 4. Comments

## 5. Control flow
- if
- while
- for
- do...while
- switch
- break/continue (banned!!)

-->

<a href="/blog/c/hello-world/"><button class="prevlink">2.2 Hello World</button></a>
<a href="/blog/c/macros/"><button class="nextlink">4. Macros</button></a>
