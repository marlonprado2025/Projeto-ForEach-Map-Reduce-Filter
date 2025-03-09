
const lista = document.querySelector('ul')
const showAllButtun = document.querySelector('.show-All')
const mapAllButtun =document.querySelector('.map-all')


function showAll() {
 
 let myLi =''
    menuOptions.forEach((produto) => {

        myLi +=
    `
            <li>
                    <img src=${produto.src}>
                    <p>${produto.name}</p>
                    <p class="price"> R$${produto.price}</p>
            </li>
            
    `  
    })
    
    lista.innerHTML = myLi
}


function mapAllitem() {
   const newPrice = menuOptions.map((price)=>({
    name:price.name,
    price: price.price*0.9,
    src: price.src
   }))
   console.log(newPrice)
}

showAllButtun.addEventListener('click', showAll)
mapAllButtun.addEventListener('click',mapAllitem)