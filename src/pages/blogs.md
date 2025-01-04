---
title: Blogs
layout: base.liquid
---

<ul>
  {% for group in collections.blogs %}
    <li style="padding-bottom: 1.5rem"> <b>{{ group.dirName }}</b>
      <ul>
        {% for post in group.posts %}
          <li> <a href="{{ post.url }}">{{ post.data.title }}</a></li>
        {% endfor %}
      </ul>
    </li>
  {% endfor %}
</ul>
