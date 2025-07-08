// fetch('https://dummyjson.com/recipes')
fetch(`${process.env.API_KEY}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));