// function Validate()
// {
//     var ip = document.getElementsByTagName("input")
//     if(ip[0].value=="")
//     {
//         alert("chưa nhập giá trị")
//         return false
//     }else
//     {
//         console.log(ip[0].value)
//         return true
//     }
// }
// Kiểm tra nhập vào có phải là 1 số điện thoaiij k
function Validate()
{
    var ip = document.getElementsByTagName("input") 
    // cách khác truy cập input theo name form và name input
    var ip=document.frmForm.txtPhone;
    var regex=/^0\d{9}$/
    if(regex.test(ip.value))
    {
        alert(" hợp lệ")
        return true
    }
    else{
        alert("k hợp lệ")
        return false
    }
}
