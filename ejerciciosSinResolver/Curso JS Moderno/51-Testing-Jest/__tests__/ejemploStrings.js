const password = "123456";

describe('Valida que el password no este vacío y tenga una extensión de 6 caracteres', () => {

    // Prueba 1
    test('Que el password tenga 6 caracteres', () => {
        // Verificar que un string tenga cierta cantidad de elementos, en este caso 6
        expect(password).toHaveLength(6);
    });

    // Prueba 2
    test('Password no vacío', () => {
         // Verificar que un string no este vacio
        expect(password).not.toHaveLength(0);
    });
});
