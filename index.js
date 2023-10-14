const btnEl = document.getElementById("btn");

const apiKey = "/Z/uiKWC6iFfhUNYpiee6A==DpBBIdicAL0i3yJP";
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
}
const apiURL ="https://api.api-ninjas.com/v1/dadjokes?limit=1";


const btnId = document.getElementById('btn');
const jokeId = document.getElementById("joke");


async function getJoke(){

    jokeId.innerHTML = "Updating.."

    // changing the button text and making it disable...
    btnId.disabled = true;
    btnId.innerHTML = "Loading...";


    // fetching the data
    const response =  await fetch(apiURL, options);
    const data = await response.json();

    // changing the button text and making it clickable...
    btnId.disabled = false;
    btnId.innerHTML = "Tell me a joke"


    // console.log(data[0].joke)

    jokeId.innerHTML = data[0].joke;
}


btnEl.addEventListener("click", getJoke)
