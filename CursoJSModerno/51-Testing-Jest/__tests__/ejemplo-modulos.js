
import { suma } from '../js/funciones.js'; 

describe('Suma de dos números', () => {
    test('Sumar 10 y 20 debe dar por resultado: 30', () => {
        expect( suma(10,20)).toBe(30);
    })
})

