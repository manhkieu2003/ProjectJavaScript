const btnEl = document.querySelector(".btn");
const bodyEdl = document.querySelector("body");
var colors = ["green","blue","red","orange","yellow","violet"];
bodyEdl.style.background="pink";

// btnEl.addEventListener("click",addColor);

// function addColor()
// {
//     for(var i=0;i<colors.length;i++)
//     {
//         // Dùng setTimeout để tạo độ trễ giữa các lần thay đổi màu
//         (function(i) {
//             setTimeout(function() {
//                 bodyEdl.style.background = colors[i]; // Thay đổi màu nền theo chỉ số i
//             }, i * 1000); // Mỗi lần thay đổi sẽ có độ trễ 1 giây
//         })(i);
//     }
// }
let count=0;
btnEl.addEventListener("click",addCollor)
function addCollor()
{
    console.log("clicked");
    // var color = parseInt(Math.random()*colors.length);
    bodyEdl.style.background = colors[count%colors.length];
    // bodyEl.style.background = colors[color];
    count++;
}