---
title: 7.0 Pointeurs
layout: base.liquid

prev: /blog/c-fr/arrays
next: /blog/c-fr/memory
---

## 1. Mémoire
Avant de définir ce qu'est un pointeur, il faut d'abord comprendre comment marche la mémoire d'un ordinateur:

![Schéma RAM](/assets/images/ram-smoler.png)

La mémoire est tout simplement un énorme array où sont stockées toutes les données temporaire d'un ordinateur. Sa taille dépend de votre RAM, le composant physique de votre ordinateur. *Si la mémoire de votre ordinateur fait 8Go, alors vous pourrez y stocker ~8 000 000 000 octets!*

Une adresse mémoire est un index, elle va de 0 jusqu'à la taille de votre RAM.

Pas d'inquiètudes, les ordinateurs savent très bien gérer la mémoire et C facilite énormément son utilisation.

## 2. Définition

Un pointeur est donc un index en tant qu'entier positif qui pointe vers une adresse mémoire spécifique.

## 3. Principe

Imaginez que vous avez un livre avec des pages numérotées. Chaque page a une adresse unique, qui est son numéro de page. Un pointeur est comme un marque-page qui pointe vers une page spécifique du livre. Lorsque vous utilisez le pointeur, vous pouvez accéder directement à la page correspondante.

De même, lorsque vous utilisez un pointeur en C, vous pouvez accéder directement à la valeur stockée à l'adresse mémoire correspondante. Cela permet de faire des manipulations performantes, par exemple: échanger deux adresses plutôt que de copier trois fois les objets stockés à ces adresses.

## 4. Opérateurs (&, *)

Il existe deux opérateurs principaux pour travailler avec les pointeurs : `&` et `*`.

*Oui, ça peut être perturbant car ce sont les mêmes que le ET logique et l'opérateur de multiplication... Pardonnons C car il est vieux...*

- L'opérateur & est utilisé pour obtenir l'adresse mémoire d'une variable:
```c
int x = 5;
int* ptr = &x;
```
*Dans cet exemple, `ptr` est un pointeur qui pointe vers l'adresse mémoire de `x`. On utilise assez souvent `ptr` pour "pointer", c'est plus court comme ça.*

- L'opérateur * est utilisé pour accéder à la valeur stockée à l'adresse mémoire pointée par un pointeur:
```c
int x = 5;
int* ptr = &x;

int valeur = *ptr;
```
*Dans cet exemple, valeur est égal à 5, car `ptr` pointe vers l'adresse mémoire de `x`, qui contient la valeur `5`.*

## 5. En tant que paramètre
Les pointeurs peuvent être utilisés comme paramètres de fonctions pour passer des variables par référence. Cela signifie que la fonction peut modifier la valeur de la variable originale.

```c
void incrementer(int* ptr) {
    *ptr += 1;  // *ptr déférence ptr, et on ajoute 1
}

int main() {
    int x = 5;
    incrementer(&x);
    printf("%d\n", x);  // 6

    return 0;
}
```
*Dans cet exemple, la fonction `incrementer` prend un pointeur vers un entier comme paramètre. La fonction incrémente la valeur pointée par le pointeur, ce qui modifie la valeur de `x`.*

## 6. Arrays personnalisés
Les pointeurs peuvent être utilisés pour créer des arrays personnalisés, donc de taille calculée en "run-time":
```c
int* arr = malloc(4 * sizeof(int));
arr[0] = 2;
arr[1] = 3;
arr[2] = 5;
arr[3] = 7;
```
*Dans cet exemple, `arr` est un pointeur qui pointe vers un bloc de mémoire alloué pour stocker 4 entiers. Les éléments de l'array peuvent être accédés en utilisant `[]`.*

*Nous allons voir dans le prochain chapitre comment utiliser `malloc`.*

*`sizeof` récupère la taille que prend un `int` en mémoire, généralement c'est 4 (4 octets).*

## 7. Pointeur de pointeur 🤯
### Work In Progress

![Anya Pointers](/assets/images/anya-pointers.png)
