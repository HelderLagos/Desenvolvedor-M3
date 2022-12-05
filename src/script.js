import produtos from './JS/db.json' assert {type: 'json'};

let containerProducts = document.querySelector('.main-container');

const showcase = (array) => {
    containerProducts.innerHTML = ""
    array.map((val)=>{
        containerProducts.innerHTML += `
        <div class="product">
        <img src="${val.image}" alt="${val.name}">
        <h3>${val.name}</h3>
        <span class="item-price">R$ ${val.price}</span>
        <span class="parcela">até ${val.parcelamento}</span>
        <a key="${val.id}" class="add-to-cart">COMPRAR</a>        
        </div>`
    })
}

showcase(produtos.products);

const buttonCart = document.querySelector('.add-to-cart')
let numItensCart = document.querySelector('.num-cart')
let cart = 0

const addToCart = (event) => {    
    if (event.target.tagName == "A"){
        cart++
        numItensCart.innerHTML = cart
    }
}

const filterProd = () => {
    
}

containerProducts.addEventListener('click', addToCart );
