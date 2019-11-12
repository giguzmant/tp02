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

const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"];

const ventas = [
  [ 100000000, 4, 2, 2019, 'Grace', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'] ],
  [ 100000001, 1, 1, 2019, 'Ada', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'] ],
  [ 100000002, 2, 1, 2019, 'Grace', 'Caballito', ['Monitor ASC 543', 'Motherboard MZI', 'HDD Toyiva'] ],
  [ 100000003, 10, 1, 2019, 'Ada', 'Centro', ['Monitor ASC 543', 'Motherboard ASUS 1200'] ],
  [ 100000004, 12, 1, 2019, 'Grace', 'Caballito', ['Monitor GPRS 3000', 'Motherboard ASUS 1200'] ],
  [ 100000005, 21, 3, 2019, 'Hedy', 'Caballito', ['Monitor ASC 543', 'Motherboard ASUS 1200', 'RAM Quinston'] ]
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

const precioMaquina = (monitor,motherboard,hdd,ram) =>{

    let monit= precios.find((moni)=>{
        return moni[0] == monitor;
    })

    let mother= precios.find((mother)=>{
        return mother[0] == motherboard;
    })

    let memoriaHdd= precios.find((memoHdd)=>{
        return memoHdd[0] == hdd;
    })

    let memoriaRam= precios.find((memoRam)=>{
        return memoRam[0] == ram;
    })
    
    return  sum = monit[1] + mother[1] + memoriaHdd[1] + memoriaRam[1];
    
};

test('Suma total de precio de maquina',()=>{

    expect(precioMaquina('Monitor GPRS 3000', 'Motherboard ASUS 1500', 'HDD Toyiva', 'RAM Quinston')).toBe(520);

});

/*
const cantidadVentasComponente = (componente) =>{

    let index = ventas.filter((component)=>{
        return component[6] == componente
    })

    let contador = 0;
    for(let i=0; i<ventas.length; i++){
        if(componente == index){
            contador++;
        }
    }
   
    return contador;

};

test('Cantidad de veces que fue vendido el componente',()=>{
    

});
*/





