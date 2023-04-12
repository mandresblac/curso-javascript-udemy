const carrito = ["Producto 1", "Producto 2", "Producto 3"];

describe('Testing al carrito de compras', () => {

    // Prueba 1
    test('Probar que el array tenga 3 elementos', () => {
        // Verificar que un array tenga cierta cantidad de elementos, en este caso 3
        expect(carrito).toHaveLength(3);
    })

    // Prueba 2
    test('Veriicar que elcarrito no este vacio', () => {
        // Verificar que un array no este vacio
        expect(carrito).not.toHaveLength(0);
    })

})
