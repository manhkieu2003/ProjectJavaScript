const btnEl = document.querySelector(".btn");
const jokeEl = document.querySelector(".joke");
const categoryEl = document.querySelector(".category");
var URL = "https://v2.jokeapi.dev/joke/Any?type=single&amount=1";

btnEl.addEventListener('click',getData)
 async function getData(){
    jokeEl.classList.remove("effect")
    categoryEl.classList.remove("effect")
    const data = await fetch(URL).then(e=>e.json())
    console.log(data)
    if(data)
    {
        categoryEl.innerHTML=`Category:${data.category}`
        categoryEl.classList.add("effect")
        jokeEl.innerHTML=data.joke
        jokeEl.classList.add("effect")
    }
}