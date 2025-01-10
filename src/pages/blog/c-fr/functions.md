---
title: 3.4 Fonctions
layout: base.liquid

prev: /blog/c-fr/variables
next: /blog/c-fr/control-flow
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
<pre class="language-ml"><code class="language-ml"><span class="token keyword">let</span> multiplication<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token punctuation">:</span> <span class="token keyword">int</span> <span class="token operator">*</span> <span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">int</span> <span class="token operator">=</span>
    x <span class="token operator">*</span> y
<span class="token punctuation">;;</span></code></pre>
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
<pre class="language-ml"><code class="language-ml"><span class="token keyword">let</span> <span class="token keyword">rec</span> <span class="token function">facto</span><span class="token punctuation">(</span>x <span class="token punctuation">:</span> <span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">int</span> <span class="token operator">=</span>
    <span class="token keyword">if</span> x <span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">then</span>
        <span class="token number">1</span>
    <span class="token keyword">else</span>
        x <span class="token operator">*</span> <span class="token function">facto</span><span class="token punctuation">(</span>x <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">;;</span></code></pre>
</article>
</section>
