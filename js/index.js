const btn = document.getElementById("btn");
const jokes = document.getElementById("jokes");

async function getJokes() {
  const res = await fetch("https://dummyjson.com/quotes/random");
  const data = await res.json();
  jokes.innerText = data.quote;
}

btn.addEventListener("click", getJokes);
