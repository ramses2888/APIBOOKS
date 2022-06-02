const {Products, Categories} = require('../db')

// (ISBN, name, price, autor, editorial, stock, image, description)

//const books =  [[
    // {
    //     ISBN: '978-84-376-0494-7',
    //     name: 'El nombre de uno',
    //     price: 15.99,
    //     autor: 'Umberto Eco',
    //     editorial: 'Penguin',
    //     stock: 10,
    //     image: ["https://http2.mlstatic.com/D_NQ_NP_999523-MCO48711147536_122021-O.webp"],
    //     description: "El nombre de la rosa es una novela de ficción escrita por Umberto Eco, que narra la historia de una joven que se llama Rosa María, que vive en una ciudad de la costa del sur de Italia.",
    // },
                
    // {
    //     ISBN: '978-84-174-7392-3',
    //     name: 'La historia de dos',
    //     price: 25.99,
    //     autor: 'Umberto Eco',
    //     editorial: 'Penguin',
    //     stock: 15,
    //     image: ["https://http2.mlstatic.com/D_NQ_NP_833109-MCO48209107611_112021-O.webp"],
    //     description: "El nombre de la rosa es una novela de ficción escrita por Umberto Eco, que narra la historia de una joven que se llama Rosa María, que vive en una ciudad de la costa del sur de Italia.",
    // },
  //], "BOOKS"
//]

//const belleza =  [[
    
//   {
//     ISBN: '978-89-376-0494-7',
//     name: 'El nombre de tres',
//     price: 15.99,
//     autor: 'Umberto Eco',
//     editorial: 'Penguin',
//     stock: 10,
//     image: ["https://http2.mlstatic.com/D_NQ_NP_999523-MCO48711147536_122021-O.webp"],
//     description: "El nombre de la rosa es una novela de ficción escrita por Umberto Eco, que narra la historia de una joven que se llama Rosa María, que vive en una ciudad de la costa del sur de Italia.",
// },
            
// {
//     ISBN: '978-84-174-7372-3',
//     name: 'La historia de cuatro',
//     price: 25.99,
//     autor: 'Umberto Eco',
//     editorial: 'Penguin',
//     stock: 15,
//     image: ["https://http2.mlstatic.com/D_NQ_NP_833109-MCO48209107611_112021-O.webp"],
//     description: "El nombre de la rosa es una novela de ficción escrita por Umberto Eco, que narra la historia de una joven que se llama Rosa María, que vive en una ciudad de la costa del sur de Italia.",
//},
//], "BELLEZA"
//]

//const muebles =  [[
//   {
//     ISBN: '978-84-376-0294-7',
//     name: 'El nombre de cinco',
//     price: 15.99,
//     autor: 'Umberto Eco',
//     editorial: 'Penguin',
//     stock: 10,
//     image: ["https://http2.mlstatic.com/D_NQ_NP_999523-MCO48711147536_122021-O.webp"],
//     description: "El nombre de la rosa es una novela de ficción escrita por Umberto Eco, que narra la historia de una joven que se llama Rosa María, que vive en una ciudad de la costa del sur de Italia.",
// },
            
// {
//     ISBN: '948-84-174-7392-3',
//     name: 'La historia de Google',
//     price: 25.99,
//     autor: 'Umberto Eco',
//     editorial: 'Penguin',
//     stock: 15,
//     image: ["https://http2.mlstatic.com/D_NQ_NP_833109-MCO48209107611_112021-O.webp"],
//     description: "El nombre de la rosa es una novela de ficción escrita por Umberto Eco, que narra la historia de una joven que se llama Rosa María, que vive en una ciudad de la costa del sur de Italia.",
// },
   
//], "MUEBLES"
//]

async function preloadProducts() {
    const array = []
  
    await array.forEach(async (list) => {
      const newCategory = await Categories.create({name: list[1], description: 'algo'})
      list[0].forEach(async (product) => {
        const newProduct = await Products.create(product)
        newProduct.addCategories(newCategory)
      })
    })
  }
  
  module.exports = preloadProducts

