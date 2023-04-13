import { suma } from "../js/funciones.js"

describe('Suma de dos números', () => {
    // Prueba 1
    test('Sumar de 10 y 20, debe dar como resultado 30', () => {
        expect(suma(10, 20)).toBe(30);
    })

});
