const PRODUCTS = [
    {
        id: 100,
        name: 'Pingente de Ouro Família',
        price: 199.99,
        image: require('../images/prod1.jpg'),
        description: 'Adorno em Ouro, pingente Família 4 integrantes.'
    },
    {
        id: 101,
        name: 'Pingente de Obsidiana',
        price: 799.99,
        image: require('../images/prod2.jpg'),
        description: 'Adorno em Obsidiana, pingente Yin e Yang.'
    },
    {
        id: 102,
        name: 'Pringente de Ouro Leopardo',
        price: 199.99,
        image: require('../images/prod3.jpg'),
        description: 'Adorno em Ouro, pingente de Leopardo.'
    },
    {
        id:103,
        name: 'Pingente de Cobre',
        price: 99.99,
        image: require('../images/prod4.jpg'),
        description: 'Adorno em Cobre, pingente Estrela de David'
    },
    {
        id:104,
        name: 'Pingente de Ouro Cavalgada',
        price: 159.99,
        image: require('../images/prod5.jpg'),
        description: 'Adorno em Ouro, pingente edição Cavalgada'
    },
    {
        id:105,
        name: 'Pingente de Ouro Gamer',
        price: 499.99,
        image: require('../images/prod6.jpg'),
        description: 'Adorno em Ouro, pingente Olho da Verdade - Edição Gamer'
    }
    
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

