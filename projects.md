---
layout: page
title: Projects
permalink: /projects
---

{% for project in site.data.projects %}

 - [{{ project.name }}]({{ project.url }}):
{{ project.description }} ({{ project.year }})

{% endfor %}
