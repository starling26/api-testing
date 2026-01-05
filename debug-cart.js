// Script temporal para verificar los datos del carrito ID 1
const fetch = require('node-fetch');

async function debugCart() {
    try {
        const response = await fetch('https://dummyjson.com/carts/1');
        const cart = await response.json();
        console.log('Carrito actual con ID 1:');
        console.log(JSON.stringify(cart, null, 2));
        
        // Ahora intentamos actualizarlo
        const updateResponse = await fetch('https://dummyjson.com/carts/1', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: 5,
                products: [
                    { productId: 1, quantity: 3 }
                ]
            })
        });
        
        const updatedCart = await updateResponse.json();
        console.log('\nCarrito después de actualización:');
        console.log(JSON.stringify(updatedCart, null, 2));
        
    } catch (error) {
        console.error('Error:', error);
    }
}

debugCart();
