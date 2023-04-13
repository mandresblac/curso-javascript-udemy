const cliente = {
    nombre: "Manuel 2",
    balance: 500,
    tipo: "Premium"
};

describe('Testing al cliente', () => {

    // Prueba 1
    test('Es Manuel Blanco', () => {
        expect(cliente).toMatchSnapshot();
    });

});