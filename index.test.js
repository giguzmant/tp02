const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"];

const ventas = [
  [ 100000000, 4, 2, 2019, 'Grace', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'] ], //TOTAL VENTAS: $320 - GRACE
  [ 100000001, 1, 1, 2019, 'Ada', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'] ], // TOTAL VENTAS: $320 - ADA
  [ 100000002, 2, 1, 2019, 'Grace', 'Caballito', ['Monitor ASC 543', 'Motherboard MZI', 'HDD Toyiva'] ], //TOTAL VENTAS: $370 - GRACE
  [ 100000003, 10, 1, 2019, 'Ada', 'Centro', ['Monitor ASC 543', 'Motherboard ASUS 1200'] ], //TOTAL VENTAS:  $350 - ADA
  [ 100000004, 12, 1, 2019, 'Grace', 'Caballito', ['Monitor GPRS 3000', 'Motherboard ASUS 1200'] ], //TOTAL VENTAS: $350 - GRACE
  [ 100000005, 21, 3, 2019, 'Hedy', 'Caballito', ['Monitor ASC 543', 'Motherboard ASUS 1200', 'RAM Quinston'] ] //TOTAL VENTAS: $460 - HEDY
]

const precios = [
    [ 'Monitor GPRS 3000', 200 ],
    [ 'Monitor ASC 543', 250 ],

    [ 'Motherboard ASUS 1500', 120 ],
    [ 'Motherboard ASUS 1200', 100 ],
    [ 'Motherboard MZI', 30 ],

    [ 'HDD Toyiva', 90 ],
    [ 'HDD Wezter Dishital', 75 ],

    [ 'RAM Quinston', 110 ],
    [ 'RAM Quinston Fury', 230 ]
]

const sucursales = ['Centro', 'Caballito'];


/*
    1.  precioMaquina(componentes): recibe un array de componentes y devuelve 
    el precio de la máquina que se puede armar con esos componentes, que 
    es la suma de los precios de cada componente incluido.
*/
const precioMaquina = (monitor,motherboard,hdd,ram) =>{
    let sumaTotal=0;
        for(let component of precios){
            if ((component [0] == monitor) || (component[0]==motherboard) || (component[0]==hdd) || (component[0] == ram)){
                sumaTotal+=component[1]
            }
        }
    return sumaTotal;
};

test('Suma total de precio de maquina',()=>{
    expect(precioMaquina('Monitor GPRS 3000', 'Motherboard ASUS 1500', 'HDD Toyiva', 'RAM Quinston')).toBe(520);
});


/* 2.  cantidadVentasComponente(componente): recibe el nombre de un componente
    y devuelve la cantidad de veces que fue vendido. La lista de ventas no se 
    pasa por parámetro, se asume que está identificada por la variable ventas.

    4.  componenteMasVendido(): Devuelve el nombre del componente que más ventas
    tuvo históricamente. El dato de la cantidad de ventas es el que indica la
    función cantidadVentasComponente*/


/* 3.  ventasVendedora(nombre): recibe por parámetro el nombre de una vendedora
    y retorna el importe total de ventas realizadas por dicha vendedora.*/


/*  5.  ventasSucursal(sucursal): recibe por parámetro el nombre de una sucursal y
    retorna el importe de las ventas totales realizadas por una sucursal sin 
    límite de fecha. */


/*  6.  mejorVendedora(): Devuelve el nombre de la vendedora que más ingresos generó */


/*  7.  ventaPromedio(): Debe retornar el importe promedio por venta, como un número
    entero sin decimales redondeado siempre para abajo. */


/*  8.  obtenerIdVenta(): Tiene que retornar un número aleatorio entre 100000000 y 
    999999999

    9.  agregarVenta(dia, mes, anio, vendedora, sucursal, componentes): recibe por 
    parámetro todos los datos de una venta, y los agrega en el array de ventas.
    Al igual que las ventas que ya están previamente creadas, además de estos 
    datos necesitamos agregar el primer dato que es un identificador de la venta.
    Para agregar este dato, tenemos que usar la función desarrollada en el punto 
    anterior obtenerIdVenta */
