
// var bts = document.querySelector("button");
// bts.addEventListener("click",()=>{
//     var ip = document.querySelector("input").value
//     alert(ip)
// })

var sl = document.querySelector("select")
sl.addEventListener("change",()=>{
    var op = document.querySelectorAll("option")
    for(var i=0;i<op.length;i++)
    {
        if(op[i].selected)
           {
            alert(op[i].value)
           }
        }
})

// var bts = document.querySelector("button");
// bts.addEventListener("click",()=>{
//     var ip = document.getElementsByName("gt")
//     var result="";
//     for(var i=0;i<ip.length;i++){
//        if(ip[i].checked)
//        {
//         result+=ip[i].value+"\n";
//        }
//     }
    
//     alert(result)
// })
// 2 cách truy vấn đến input
// var bts = document.querySelector("button")
// bts.addEventListener("click",()=>{
//     var ip = document.querySelectorAll("input")
//     var result="";
    
//     for(var i=0;i<ip.length;i++)
//     {
//         if(ip[i].checked)
//         {
//              result+=ip[i].value +"\n"
//         }
//     }
//     alert(result)
// })

// RAdio
var bts = document.querySelector("button")
bts.addEventListener("click",()=>{
        var radios = document.querySelectorAll("input")
        var result="";
        
        for(var i=0;i<radios.length;i++)
        {
            if(radios[i].checked)
            {
                 result=radios[i].value +"\n"
            }
        }
        alert(result)
    })