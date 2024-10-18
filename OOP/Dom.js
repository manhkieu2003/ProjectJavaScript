// cach 1 truy cap den element node
var x =document.getElementById("the")
x.addEventListener('mousemove',()=>{
    x.style.color="green";
    x.style.cursor="pointer"
})
x.addEventListener('mouseout',()=>{
    x.style.color="red"
})
x.addEventListener("click",()=>{
    x.style.opacity=0;
})
 //x.innerHTML ="<h1>Nội dung</h1>" // có thể đọc được Html
// innerHtml vừa get vừa set
//x.innerText ="<h1>Nội dung</h1>" // k chưa dc thẻ html
// cách 2
// var the = document.getElementsByTagName("div")
// the[1].innerHTML="đã thêm"
// console.log(the)
// cách 3
//  var the = document.getElementsByClassName("vidu")
//  the[2].innerHTML="đang học"
// console.log(the)
// cách 4 dùng elementsByname thường được dùng trong form
// var names = document.getElementsByName("txtName")
// names[0].value="abcxyz"
// // cách 5 sử dụng thông qua queryselector
// var the = document.querySelector(".vidu")
// the.innerHTML="danghoc"
// console.log(the)
// cách 6 dựa vào queryselectorAll
// var theh1 = document.createElement("h1")
// theh1.innerHTML="hello"
// var vidu = document.querySelector(".vidu")
// vidu.appendChild(theh1)
// //  var text = document.createTextNode("hello")
// // thêm thuộc tính
// theh1.setAttribute("id","id1")
// // lấy thuộc tính
// var attheh1 = theh1.getAttribute("id")
// alert(attheh1)
// // xóa element node
//  //1+ xác định ông cha rồi xóa ông con
//  var bt =document.querySelector("button")
//   bt.addEventListener("click",()=>{
//     document.body.removeChild(vidu)
//   })
 











