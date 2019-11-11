/*

Se pide desarrollar las siguientes funciones para poder brindar 
la información necesario a la empresa que nos pidió el desarrollo:

1.  precioMaquina(componentes): recibe un array de componentes y devuelve 
    el precio de la máquina que se puede armar con esos componentes, que 
    es la suma de los precios de cada componente incluido.

2.  cantidadVentasComponente(componente): recibe el nombre de un componente
    y devuelve la cantidad de veces que fue vendido. La lista de ventas no se 
    pasa por parámetro, se asume que está identificada por la variable ventas.

3.  ventasVendedora(nombre): recibe por parámetro el nombre de una vendedora
    y retorna el importe total de ventas realizadas por dicha vendedora.

4.  componenteMasVendido(): Devuelve el nombre del componente que más ventas
    tuvo históricamente. El dato de la cantidad de ventas es el que indica la
    función cantidadVentasComponente

5.  ventasSucursal(sucursal): recibe por parámetro el nombre de una sucursal y
    retorna el importe de las ventas totales realizadas por una sucursal sin 
    límite de fecha.

6.  mejorVendedora(): Devuelve el nombre de la vendedora que más ingresos generó

7.  ventaPromedio(): Debe retornar el importe promedio por venta, como un número
    entero sin decimales redondeado siempre para abajo.

8.  obtenerIdVenta(): Tiene que retornar un número aleatorio entre 100000000 y 
    999999999

9.  agregarVenta(dia, mes, anio, vendedora, sucursal, componentes): recibe por 
    parámetro todos los datos de una venta, y los agrega en el array de ventas.
    Al igual que las ventas que ya están previamente creadas, además de estos 
    datos necesitamos agregar el primer dato que es un identificador de la venta.
    Para agregar este dato, tenemos que usar la función desarrollada en el punto 
    anterior obtenerIdVenta
*/