const {
    precioMaquina,
    cantidadVentasComponente,
    componenteMasVendido,
    obtenerIdVenta
} = require('./index');

/**1 */
test('Devuelve el importe total para armar una maquina', () => {
    expect(precioMaquina('Monitor GPRS 3000', 'Motherboard ASUS 1500', 'HDD Toyiva', 'RAM Quinston')).toMatch("Para armar una maquina necesitas: $520");
});

/**2 */
test('Devuelve la cantidad de ventas por componente', () => {
    expect(cantidadVentasComponente('Motherboard ASUS 1500')).toMatch("Motherboard ASUS 1500 fue vendido 2 veces");
});

/**4 */
test('Devuelve el componente mas vendido', () => {
    expect(componenteMasVendido()).toMatch("El componente mas vendido fue: Monitor GPRS 3000");
})

/**8 */
test('Obtener el id de cada venta', () => {
    expect(obtenerIdVenta()).toBeGreaterThanOrEqual(100000000);
    expect(obtenerIdVenta()).toBeLessThanOrEqual(999999999)
});