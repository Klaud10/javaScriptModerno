const carrito = ['Producto 1', 'Producto2', 'Producto3'];

describe('Testing al carrito de compras', () => {
    test('Probar que el array tenga tres elementos', () => {
        expect( carrito ).toHaveLength(3);
    });
    
    test('Verificar que el carrito no está vacio', () => {
        expect( carrito ).not.toHaveLength(0);
    });
});