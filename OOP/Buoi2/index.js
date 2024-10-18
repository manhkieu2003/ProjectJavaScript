        //  var result="KIeuducmanh";
        // // var firstString =result.concat("yeu nguyễn mai anh"); // nối chuỗi
        // var firtUpper = result.toUpperCase(); // viết hoa
        // var firtlower = result.toLowerCase(); // viết thường
        
        // alert(firtUpper)

        // // mảng trong javascript k cần cùng kiểu dữ liệu ở phần tử 
        // // có thể là true false cũng được
        // var array =[1,2,3,true,"hai",["hi","huz",99]]
        // var array2 = new Array("1",2,4,true)
        // console.log(array[5][0])
        // console.log(array2)
        // nhập từ bàn phím sử dụng promt trả về String nên phải convert
        // var a = Number (prompt("nhập số a"));
        // var b = Number(prompt("nhập số b"));
        // var c = a + b;
        // document.write("tổng" + c)
        // var st ="chào"
        // var st2= st + 1
        // document.write(st2)
        

        // ép kiểu ngầm định trong javascript sẽ là dấu +
        // ép kiểu String
        // var x =String(100)
        // console.log(typeof(x))
        // // ép kiểu Số
        // var y =Number("100");
        // console.log(typeof(y))
        // var x = parseInt(9.4)
        // console.log(x)
        
        // var x1="4";
        // var x2 =4;
        // if(x1 == x2)
        //      document.write("bằng nhau")
        // else document.write("không bằng nhau"); 
        //tại sao lại bằng nhau vì == chỉ so sánh về value chứ không so sánh datatype
        // === sẽ so sánh datatype 
        // ví dụ về đệ quy
        // function nhap()
        // {
        //     var n = prompt("nhập số n");
        //     if(isNaN(n)==false) // điểm dừng
        //          document.write(n)
        //         else nhap()
        // }
        // nhap();




        // ham
    //     function sum(a,b)
    //     {
    //         return a+b;
    //     }
    //     function sum2(a,b)
    //     {
    //         document.write(a+b);
    //     }
    //    document.write (sum(3,4)*5) // sum2(3,4) ở đây sẽ là docu.... không cộng dc với 9
    // var ok = confirm("ban đã muốn đi học chưa")
    // if(ok) // hoac ok == true vi confirm cha ve kieu boolean
    //     document.write("đã muốn đi")
    // else {document.write("Đéo muốn đi")}
//     var x =document.querySelector("button")
//     var t;
//   x.addEventListener("click",()=>{
//      t=setInterval("alert('hihi')",3000)
//   })
//    var k = document.querySelector(".huy")
//    k.addEventListener("click",()=>{
//      clearInterval(t)
//    })


//    var y = document.querySelector("input") // di chuyển vào input
//    y.addEventListener("mouseover",()=>{
//     alert("hellos")
//    })
//    var z = document.querySelector("input") // chuột di vào focus
//    z.addEventListener("focus",()=>{
//     alert("focuz")
//    })
//  var b = document.querySelector("input") // sự kiện người dùng di chuyển và kích chuột ra chỗ khác
//  b.addEventListener("blur",()=>{
//     alert("blur")
//  })
//  var h = document.querySelector("button") // sự kiện thay đổi value trong input
//  h.addEventListener("change",()=>{
//     alert("changes")
//  })
  

 // sự lý sự kiện timer : settimeout,clear...,setInterval


 // oop 
//    var phuong = new Object();
//    phuong.name="kieuducmanh";
//    phuong.age=12;
//    phuong.address="hanoi";
//    // phuong thuc
//    phuong.ketqua=()=>{
//     if( phuong.age > 10) return "đã đến tuổi"
//     else return "chưa đến tuổi"
//    }
//    console.log(phuong.name)
//    console.log(phuong.ketqua())
//  function Sinhvien(masv,hoten,diem)
//  {
//     this.masv =masv;
//     this.hoten=hoten;
//     this.diem=diem;
//     this.ketqua=()=>{
//         if(this.diem >5) return "đỗ";
//         else return "trượt";
//     }

//  }
//  Sinhvien["manh"] = new Sinhvien("mahn","manh",6)
//  Sinhvien["hue"] = new Sinhvien("huhn","hue",4)
//  document.write(Sinhvien["hue"].ketqua())



            