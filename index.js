const button = document.getElementById("btn")
const joke = document.getElementById("joke")

const apiKey = "ZKKUtJ2FB50u8s5CUWtC/A==IRDNjdhV8CIHTc8l"

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
    try {
        joke.innerText = "Updating...";
        button.disabled = true;
        button.innerText ="Loading..."
        const response = await fetch(apiURL, options);
        const data = await response.json();

        button.disabled = false;
        button.innerText ="Tell me a joke"

        joke.innerText = data[0].joke; 
      } catch (error) {
        joke.innerText = "An error happend, try again later";
        console.log(error);
}
}

button.addEventListener("click", getJoke);