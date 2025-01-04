---
title: 2.2 Hello, World!
layout: base.liquid

prev: /blog/c/installation
next: /blog/c/syntax
---

Maintenant que vous avez installé GCC et un environnement de développement intégré (IDE), créons un simple programme "Hello, World !" ("Bonjour, monde!" en anglais) en C.

**Qu'est-ce que le programme "Hello, World !"?** <br>
Le programme "Hello, World !" est un programme traditionnel qui est souvent utilisé pour introduire les débutants à un nouveau langage de programmation et vérifier si l'environnement est correctement configuré. Il s'agit d'un programme simple qui affiche "Hello, World !" à l'écran.

Voici un exmple en Python:
```py
print("Hello, World!")
```

Ou encore en Ocaml:
<pre class="language-ocaml"><code class="language-py"><span class="token keyword">print_string</span> <span class="token string">"Hello, World!\n"</span></code></pre>

Créez le fichier `main.c` dans un nouveau répertoire (où vous apprendrez C) :

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```
<br>

<section class="accordion">
    <input type="checkbox" checked>
    <h4>Explication<i></i></h4>
<article>

```c
#include <stdio.h>
```
Cette ligne charge le contenu de la bibliothèque stdio, c'est une librairie qui contient une variété de fonctions pour gérer les entrées (clavier par exemple) et sorties (par exemple `printf` pour afficher dans la console).
<br>
<br>

```c
int main() { ... }
```
Cette ligne déclare la fonction principale, c'est ici que le programme commence.  <br>
Le mot `int` définit que notre fonction `main` retournera un entier. <br>
Les symboles `{` et `}` sont utilisés pour définir le début et la fin d'un groupe d'expressions.
<br>
<br>

```c
printf("Hello, World!\n");
```
Cette ligne appelle la fonction `printf` - affiche dans la console le texte saisi comme paramètre - avec une chaîne de caractères comme paramètre. <br>
<br>

`\n` représente <!-- le christ --> un saut de ligne, on peut utiliser `printf` sans saut de ligne final.<br>
Utilisez le symbole `\` pour afficher des caractères spéciaux (appelés [caractères d'échappement](https://fr.wikipedia.org/wiki/Caract%C3%A8re_d%27%C3%A9chappement)). <br><br>
Notez que à la fin de la ligne, nous utilisons un `;`, ce qui signifie que nous avons terminé pour cette expression, car C nous permet de sauter des lignes entre chaque mots pour rendre le code moins compact.
<br>
<br>

```c
return 0;
```
Ici, nous utilisons `return`, qui nous permet d'arrêter la fonction et de retourner la valeur spécifiée, dans ce cas `0` *(pour dire à l'ordinateur que tout s'est bien passé, nous n'allons pas nous y attarder)*.
</article>
</section>

*Il n'est pas obligatoire de comprendre ce code tout de suite.*

<br>

### Compilation:
Irure minim voluptate in officia. Id aliquip duis cupidatat do non dolore reprehenderit est occaecat laboris cillum irure tempor ea. Sit nostrud cillum ad proident nostrud ea pariatur fugiat eiusmod velit dolore mollit culpa. Est ipsum pariatur velit culpa elit sit ipsum voluptate elit sit do.

Pour compiler notre "Hello, World!" sur Linux, il nous faut ouvrir le terminal et entrer:

```sh
gcc -o main main.c  # dans la console
```
Cette commande indique à GCC de convertir notre code en code machine afin que l'ordinateur puisse l'exécuter. Ici, un fichier nommé `main` sera créé dans le répertoire courant. <br>
*Le mot `-o` signifie que nous voulons indiquer le nom du fichier à créer (dans ce cas `main`)*.

<br>

Pour le moment rien ne s'affiche, c'est normal, il faut l'exécuter. Toujours dans le terminal, entrer:
```sh
./main  # dans la console
```
Ici, nous demandons à l'ordinateur de démarrer le programme compilé. Vous devriez obtenir ce résultat:
```
Hello, World!
```


<section class="accordion">
    <input type="checkbox" checked>
    <h4>English version 🇬🇧<i></i></h4>
<article>

Now that you have installed GCC & an IDE, let's create a simple "Hello, World!" program in C.

**What is the "Hello, World!" program?** <br>
The "Hello, World!" program is a traditional program that is often used to introduce beginners to a new programming language & check if the environment is well setup. It's a simple program that prints "Hello, World!" to the screen.

Create the file `main.c` in a new directory (where you'll be learning C):

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

<br>

### Compile it:
```sh
gcc -o main main.c  # in the console
```
This command tells GCC to convert our code into machine code (so that the computer can execute it). Here, a file named `main` will be created in the current directory. <br>
*The word `-o` means that we want to indicate the name of the file to be created (in this case `main`)*.

<br>

### Run it:
```sh
./main  # in the console
```
Here we tell the computer to start the compiled program. You should get this result:
```
Hello, World!
```

<br>

### Explanation:
```c
#include <stdio.h>
```
This line loads the contents of the stdio library to get the `printf` function.

```c
int main() { ... }
```
This line declares the main function, this is where the program starts. <br>
The word `int` defines that our `main` function will return an integer. <br>
The `{` & `}` symbols are used to define the beginning & end of a group of expressions.

```c
printf("Hello, World!\n");
```
This line calls the `printf` function - displays in the console the text entered as parameter - with a string as parameter, ending in `\n` to create a new line at the end of the display. <br>
Use the `\` symbol to display special characters *(named [Escape characters](https://en.wikipedia.org/wiki/.Escape_character))*. <br><br>
Note that at the end of the line we use a `;`, which means we're done for this expression, because C lets you jump lines anytime you want to make the code less compact.

```c
return 0;
```
Here we use `return`, which allows us to stop the function & return the specified value, in this case `0` *(to tell the computer that all has gone well, we won't be looking into it)*.
</article>
</section>
