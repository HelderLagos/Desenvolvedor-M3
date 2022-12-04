import produtos from './JS/db.json' assert {type: 'json'};

let nameProd = produtos.products.map(produto => console.log(produto.price))

