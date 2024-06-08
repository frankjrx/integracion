const helloWorld = require('../index');

test('retorna "Hola Mundo"', () => {
    expect(helloWorld()).toBe("Hola Mundo");
});