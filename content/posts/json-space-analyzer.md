---
title: "Introducing: json-space-analyzer"
date: 2023-10-15
---

**I made a tool for analyzing the size of the data in JSON files. Go check it out at [json-space-analyzer.com](https://json-space-analyzer.com).**

It's meant to be useful when you're working with JSON data that's bigger than you think it should be, and you'd like to understand why, but it's so big that it's difficult to build intuition about what's taking up all the space by looking at the raw text.

I'm using a sunburst chart to visualize the size of the data in the file hierarchically, inspired by tools like [Disk Usage Analyzer](https://apps.gnome.org/Baobab).

I'd like to add a feature for visually grouping similarly-shaped records in arrays, inspired by [speedscope's "Left Heavy" view](https://github.com/jlfwong/speedscope#%EF%B8%8Fleft-heavy).
This would be useful for the types of files I've been using the tool for which have tens of thousands of instances of similarly-structured objects, overwhelming the sunburst chart.

If you find any issues or have suggestions for improvements, please [open an issue](https://github.com/jamesbvaughan/json-space-analyzer/issues/new) (or [email me](james@jamesbvaughan.com) if you don't use GitHub).
