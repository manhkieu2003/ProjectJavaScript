const menuList = ["menu1", "menu2", "menu3"]

var menu = document.querySelector(".menu")
if (menu) {
    //1 hàm for bình thường
    for (var i = 0; i < menuList.length; i++) {
        menu.innerHTML += `<li>${menuList[i]}</li>`
    }
    // 2hàm forin
    for (let i in menuList) {
        menu.innerHTML += `<li>${menuList[i]}</li>`
    }
    // 3hàm for of
    for (let item of menuList) {
        menu.innerHTML += `<li>${item}</li>`
    }
    //4 foreach kết hợp giữa for in và for of
    menuList.forEach((item, index) => {
        console.log(index)
        menu.innerHTML += `<li>${item}</li>`
    })
    //5 sử dụng map có {} thì phải có return ở dưới
    const result = menuList.map((item) => `<li>${item}</li>`)
    menu.innerHTML += result.join('')
}
const productList = [
    {
        id: 1,
        name: "product A",
        price: 200,
        image: "https://via.placeholder.com/600/92c952"
    },
    {
        id: 2,
        name: "product A",
        price: 200,
        image: "https://via.placeholder.com/600/92c952"
    },
    {
        id: 3,
        name: "product A",
        price: 200,
        image: "https://via.placeholder.com/600/92c952"
    },
    {
        id: 4,
        name: "product A",
        price: 200,
        image: "https://via.placeholder.com/600/92c952"
    }
]
var products = document.querySelector("#products")

 productList.forEach((product, index) => {
        return  products.innerHTML += `
             <div class="product-item border p-4 rounded shadow">
            <img src="${product.image}" width="200px" height="200px" alt="">
           <h1>${product.name}</h1>
           <span>giá:${product.price}</span>
          </div>
        `
})
for(let i in productList)
{
    products.innerHTML+=`
    <div class="product-item border p-4 rounded shadow">
            <img src="${productList[i].image}" width="200px" height="200px" alt="">
           <h1>${productList[i].name}</h1>
           <span>giá:${productList[i].price}</span>
          </div>
    `
}
for(var i=0;i<productList.length;i++)
{
    products.innerHTML+=`
    <div class="product-item border p-4 rounded shadow">
            <img src="${productList[i].image}" width="200px" height="200px" alt="">
           <h1>${productList[i].name}</h1>
           <span>giá:${productList[i].price}</span>
          </div>
    
    `
}
for(let product of productList)
{
    products.innerHTML+=`
    <div class="product-item border p-4 rounded shadow">
            <img src="${product.image}" width="200px" height="200px" alt="">
           <h1>${product.name}</h1>
           <span>giá:${product.price}</span>
          </div>
    `
}
productList.map((item,index)=>{
    return   products.innerHTML+=`
    <div class="product-item border p-4 rounded shadow">
            <img src="${item.image}" width="200px" height="200px" alt="">
           <h1>${item.name}</h1>
           <span>giá:${item.price}</span>
          </div>
    `
}).join('')


