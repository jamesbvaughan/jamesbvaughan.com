---
title: Projects
---

Here are a few projects that I've worked on over the past few years.
If you like them, there are plenty more over at
[my github profile](https://github.com/jamesbvaughan)!

{% for project in site.data.projects %}

 - [{{ project.name }}]({{ project.url }}):
{{ project.description }} ({{ project.year }})

{% endfor %}
