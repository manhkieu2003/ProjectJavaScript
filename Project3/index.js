const leftBtn = document.querySelector(".btn-left");
const rightBtn = document.querySelector(".btn-right");
const buttons = document.querySelector(".btn");
const imageEl = document.querySelector(".images")
const bt = document.getElementsByTagName("button")
var t;

const image=["1","2","3","4","5","6"];
let count=0;
leftBtn.addEventListener("click",left);
rightBtn.addEventListener("click",right);
bt[0].addEventListener("click",()=>{
    imageEl.style.background = `url("img/${image[count]}.png")`;
})
bt[1].addEventListener("click",()=>{
    imageEl.style.background = `url("img/${image[image.length-1]}.png")`;
})

function right()
{
    count++;
    console.log(count)
    if(count >image.length-1) // nếu count > lớn hơn phần tử cuối cùng
    {
        count=0; // setcount=0;
    }
    imageEl.style.background = `url("img/${image[count]}.png")`;
}
function left()
{
    count--
    if(count<0) // nếu count nhỏ hơn 0
    {
        count=image.length-1; // setCount về giá trị cuối cùng
    }
    imageEl.style.background = `url("img/${image[count]}.png")`;
}
bt[2].addEventListener("click",()=>{
    clearInterval(t)
    t=setInterval("right()",1000)
})
bt[3].addEventListener("click",()=>{
    clearInterval(t)
})