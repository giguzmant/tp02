const {
    precioMaquina,
    cantidadVentasComponente,
    componenteMasVendido
} = require('./index');


test('Devuelve el importe total para armar una maquina', () => {
    expect(precioMaquina('Monitor GPRS 3000', 'Motherboard ASUS 1500', 'HDD Toyiva', 'RAM Quinston')).toMatch("Para armar una maquina necesitas: $520");
});

test('Devuelve la cantidad de ventas por componente', () => {
    expect(cantidadVentasComponente('Motherboard ASUS 1500')).toMatch("Motherboard ASUS 1500 fue vendido 2 veces");
});

test('Devuelve el componente mas vendido', () => {
    expect(componenteMasVendido()).toMatch("El componente mas vendido fue: Monitor GPRS 3000");
})