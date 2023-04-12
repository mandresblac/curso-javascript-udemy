const cliente = {
    nombre: "Manuel Blanco",
    balance: 500
};

describe('Testing al cliente', () => {
    // Prueba 1
    test('El cliente es premium', () => {
        expect(cliente.balance).toBeGreaterThan(400);
    })

    // Prueba 2
    test('Es Manuel Blanco', () => {
        expect(cliente.nombre).toBe('Manuel Blanco');
    });

    // Prueba 2
    test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe("Pedro");
    });

    // Prueba 2
    test('No tiene 500', () => {
        expect(cliente.balance).not.toBe(400);
    });

});
