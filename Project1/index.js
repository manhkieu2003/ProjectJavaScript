const btnEl = document.querySelector(".btn");
console.log(btnEl);
const inputEl = document.querySelector("input");
console.log(inputEl);
const messageEl = document.querySelector(".message");
console.log(messageEl);
const errorEl = document.querySelector(".error");
console.log(errorEl);
btnEl.addEventListener("click",displayMessage);
function displayMessage()
{
    console.log("hello ae");
    if(inputEl.value) // nếu có value nhập vào ô input
    {
        messageEl.textContent = inputEl.value; // set message bằng value nhập vào
        inputEl.value=""; // set lại ô input bằng rỗng;
    }else{
        errorEl.style.display = "block";  // báo error
       setInterval(() => {
        errorEl.style.display = "none"; // sau 10000 sẽ ẩn interval
       }, 10000);
    }
}

