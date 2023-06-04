const btn = document.getElementById("btn");
const jokes = document.getElementById("jokes");

function getJokes() {
  console.log("clicked");
}

btn.addEventListener("click", getJokes);
