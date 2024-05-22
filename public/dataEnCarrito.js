// Función para generar un precio aleatorio entre un rango dado
function generateRandomPrice(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

// Array de productos de cuidado personal (mock)
const products = [
    {
        index: 2,
        quantity:1,
        name: "Jabón Exfoliante de Lavanda y Sal Marina",
        price: generateRandomPrice(5, 10),
        image: "https://i.etsystatic.com/29150517/r/il/a05d33/3634802963/il_794xN.3634802963_qkiy.jpg",
        description:"asdasdasdasdadadasdadasdasds"
    },
    {
        index: 3,
        quantity:1,
        name: "Aceite Corporal de Rosa Mosqueta",
        price: generateRandomPrice(15, 25),
        image: "https://www.weleda.com.pe/wp-content/uploads/2021/09/WELEDA-ACEITE-DE-ROSA-MOSQUETA-470x470.png",
        description:"asdasdasdasdadadasdadasdasds"
    },
    {
        index: 4,
        quantity:1,
        name: "Desodorante Natural en Barra",
        price: generateRandomPrice(7, 12),
        image: "https://theecobagcompany.pe/wp-content/uploads/2023/01/Desodorante-solido-600x800.jpeg",
        description:"asdasdasdasdadadasdadasdasds"
    },
];
export default products;