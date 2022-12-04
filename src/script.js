import produtos from './JS/db.json' assert {type: 'json'};


const showcase = () => {
    let containerProducts = document.querySelector('.main-container');
    produtos.products.map((val)=>{
        containerProducts.innerHTML += `
        <div class="product">
        <img src="${val.image}" alt="">
        <h3>${val.name}</h3>
        <span>R$ ${val.price}</span>
        <span class="parcela">até ${val.parcelamento}</span>
        <button key=${val.id}>COMPRAR</button>
        </div>`
    })
}

showcase();

