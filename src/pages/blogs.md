---
title: Blogs
layout: base.liquid
---

<ul>
{% for post in collections.blog %}
    <li>[{{ post.data.title }}]({{ post.url }})</li>
{% endfor %}
</ul>
