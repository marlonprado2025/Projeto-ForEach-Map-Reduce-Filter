
const lista = document.querySelector('ul')
const showAllButtun = document.querySelector('.show-All')
const mapAll = document.querySelector('.mapAll')
const sumAllTotal = document.querySelector('.sumAll')
const filterVegan = document.querySelector('.filterVegan')

let myLi = ''

function FshowAll(ArrayNew) {
        myLi = ''    //Para zerar antes de colocala como abaixo com algo, para nao gerar duplicação, Ou posso colocar a (let myLi = '') aqui dentro.

        ArrayNew.forEach((produt) => {

                myLi +=
                        `
            <li>
                <img src=${produt.src}>
                <p>${produt.name}</p>
                <p class="price"> R$${produt.price.toFixed(2)}</p>
            </li>            
        `
        })

        lista.innerHTML = myLi
}

showAllButtun.addEventListener('click', () => FshowAll(menuOptions))

function mapAllShow() {
        const newPrice = menuOptions.map((product) => ({
                name: product.name + ` ${'com 10% de desconto!'}`,
                price: product.price * 0.9,
                vegan: product.vegan,
                src: product.src
                //////////////////<!--Oou poderei usar o Spread Operator
                // ...product, price: product.price * 0.9 -->
        }
        ))

        FshowAll(newPrice)
}

mapAll.addEventListener('click', mapAllShow)

function sumAll() {
        const valueTotal = menuOptions.reduce((acc, curr) => {

                return acc + curr.price
        }, 0)
        lista.innerHTML = `
                      <li>
                           <p>VALOR TOTAL : R$${valueTotal.toFixed(2)}</p>
                      </li>            
                  `
}

sumAllTotal.addEventListener('click', sumAll)


function filterV() {
        const filterJustVegan = menuOptions.filter(filtro => {
                if (filtro.vegan === true) { return true }
        })
        FshowAll(filterJustVegan)
}

filterVegan.addEventListener('click', filterV)