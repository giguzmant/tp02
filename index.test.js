const {
    precioMaquina,
    cantidadVentasComponente,
    componenteMasVendido,
    obtenerIdVenta,
    agregarVenta,
    ventasVendedora,
    ventaPromedio
} = require('./index');

/**1 */
test('Devuelve el importe total para armar una maquina', () => {
    expect(precioMaquina('Monitor GPRS 3000', 'Motherboard ASUS 1500', 'HDD Toyiva', 'RAM Quinston')).toMatch("Para armar una maquina necesitas: $520");
});

/**2 */
test('Devuelve la cantidad de ventas por componente', () => {
    expect(cantidadVentasComponente('Motherboard ASUS 1500')).toBe(2);
});
/**3 */
test ('recibe nombre de vendedora y devuelve el total de sus ventas',() => { 
    expect (ventasVendedora('Grace')).toMatch("El importe total de ventas que realizó Grace fue $990")
});
/**4 */
test('Devuelve el componente mas vendido', () => {
    expect(componenteMasVendido()).toMatch("El componente mas vendido fue: Monitor ASC 543");
})
/**7 */
test('Devuelve promedio de ventas', () => {
    expect(ventaPromedio()).toMatch("El promedio general es de $ 353 por cada venta");
});

/**8 */
test('Obtener el id de cada venta', () => {
    expect(obtenerIdVenta()).toBeGreaterThanOrEqual(100000000);
    expect(obtenerIdVenta()).toBeLessThanOrEqual(999999999)
});

/**9 */

test('Agregar el id a ventas', () => {
    let venta = [obtenerIdVenta(), 4, 4, 2019, 'Flor', 'Centro', ['Monitor GPRS 3006']];
    agregarVenta(...venta);
    expect(venta.length).toBe(7);

    expect(obtenerIdVenta()).toBeGreaterThanOrEqual(100000000);
    expect(obtenerIdVenta()).toBeLessThanOrEqual(999999999);
});

