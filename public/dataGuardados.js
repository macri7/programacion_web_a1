// Función para generar un precio aleatorio entre un rango dado
function generateRandomPrice(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

// Array de productos de cuidado personal (mock)
const productosGuardados = [
    {
        index: 1,
        name: "Crema Hidratante Revitalizante",
        price: generateRandomPrice(10, 20),
        image: "https://pe.loccitane.com/cdn/shop/products/20HR050H20_220cca88-55d6-4553-a5f3-af71796bf72e_720x.jpg?v=1645137430",
    },
    {
        name: "Champú Nutritivo de Aloe Vera",
        price: generateRandomPrice(8, 15),
        image: "https://aruma.vtexassets.com/arquivos/ids/169204-1200-auto?v=637563720293870000&width=1200&height=auto&aspect=true",
    }
];
export default productosGuardados;