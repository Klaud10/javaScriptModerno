const cliente = {
    nombre: 'Claudio 2',
    balance: 500,
    tipo: 'Premium'
};

describe('Testing al cliente', () => {
    test('Es Claudio', () => {
        expect(cliente).toMatchSnapshot();
    });
});