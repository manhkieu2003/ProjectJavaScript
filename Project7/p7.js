const inputEl = document.querySelector("#country-name");
const searchBtnEl = document.querySelector(".searchBtn");
const result = document.querySelector(".result");
searchBtnEl.addEventListener("click",getResults);
async function getResults()
{
    let countryName= inputEl.value
    result.innerHTML = `<h2 class="loading">results Loading...</h2>`;
    let fetchUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    let data = await fetch(fetchUrl).then(e=>e.json())
    console.log(data)

}