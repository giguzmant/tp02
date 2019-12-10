/**
 * Cambiar los textos por los resultados que pedi en las funciones.
 */
const {
    precioMaquina,
    cantidadVentasComponente,
    componenteMasVendido,
    obtenerIdVenta,
    agregarVenta,
    ventasVendedora,
    ventasSucursal,
    ventaPromedio,
    mejorVendedora
} = require('./index');

/**1 */
test('Recibe un array de componentes y devuelve el importe total para armar una maquina', () => {
    expect(precioMaquina(['Monitor GPRS 3000', 'Motherboard ASUS 1500', 'HDD Toyiva', 'RAM Quinston'])).toBe(520);
});

/**2 */
test('Devuelve la cantidad de ventas por componente', () => {
    expect(cantidadVentasComponente('Motherboard ASUS 1500')).toBe(2);
});
/**3 */
test ('recibe nombre de vendedora y devuelve el total de sus ventas',() => { 
    expect (ventasVendedora('Grace')).toBe(990)
});
/**4 */
test('Devuelve el componente mas vendido', () => {
    expect(componenteMasVendido()).toMatch("Monitor ASC 543");
})
/**5 */
test ('recibe una sucursal y devuelve el importe total de sus ventas',() => {
    expect (ventasSucursal('Caballito')).toBe(1130)
})
/**6 */
test('Devuelve el nombre de la mejor vendedora', () => {
    expect(mejorVendedora()).toMatch("Grace");
});
/**7 */
test('Devuelve el promedio por cada venta', () => {
    expect(ventaPromedio()).toBe(353)
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

