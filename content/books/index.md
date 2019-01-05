---
title: books
---

<script>
fetch('https://jamesbvaughan.com/.netlify/functions/books')
  .then(x => x.json())
  .then(x => console.log(x))
</script>
