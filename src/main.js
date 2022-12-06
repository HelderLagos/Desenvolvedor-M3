import produtos from './JS/db.json' assert {type: 'json'};

let containerProducts = document.querySelector('.main-container');
let numItensCart = document.querySelector('.num-cart');
let buttonCart = document.querySelector('.add-to-cart');
let cart = 0

const parentContainer = document.querySelector('.indicator');

let btnSeeMoreColors = document.querySelector('.see-more-btn');
let colorChkList = document.querySelector('.color-chk-list');
let containerSeeMore = document.querySelector('.seeMoreContainer')


btnSeeMoreColors.addEventListener('click', () => {
    console.log('vendo mais cores!')
})

// const formatter = Intl.NumberFormat('pt-BR', {
//     style:'currency',
//     currency:'BR',
//     maximumFractionDigits:2
// })

const showcase = (array) => {
    containerProducts.innerHTML = ""
    array.map((val)=>{
        containerProducts.innerHTML += `
        <div class="product">
        <img src="${val.image}" alt="${val.name}">
        <h3>${val.name}</h3>
        <span class="item-price">${val.price}</span>
        <span class="parcela">até ${val.parcelamento}</span>
        <a key="${val.id}" class="add-to-cart">COMPRAR</a>        
        </div>`
    });
};

showcase(produtos.products);

const addToCart = (event) => {    
    if (event.target.tagName == "A"){
        cart++
        numItensCart.innerHTML = cart
    } else {
        document.querySelector('num-cart') = "";
    }
}

containerProducts.addEventListener('click', addToCart );


// ===================

// produtos.products.forEach((colorFilt) => {
//     console.log(colorFilt)});
