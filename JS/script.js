const btnEl = document.getElementById("btn-joke");
const jokeEl = document.getElementById("jokes");

// API link
const apiURL = "https://geek-jokes.sameerkumar.website/api?format=json";

// Function to fetch the joke
function getJoke() {
  jokeEl.innerText = "Updating...";
  btnEl.disabled = true;
  btnEl.innerText = "Loading...";

  // Return a Promise
  return new Promise((resolve, reject) => {
    fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        jokeEl.innerText = data.joke;
        resolve(data); 
      })
      .catch((error) => {
        jokeEl.innerText = "An error happened, try again later";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        console.log(error);
        reject(error); 
      });
  });
}

// Event listener 
btnEl.addEventListener("click", getJoke);

