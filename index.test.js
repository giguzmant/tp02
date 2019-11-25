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
        for(let componentPrecio of precios){
            if ((componentPrecio[0] == monitor) || (componentPrecio[0]==motherboard) || (componentPrecio[0]==hdd) || (componentPrecio[0] == ram)){
                sumaTotal+=componentPrecio[1]
                // ES LO MISMO : sumaTotal = sumaTotal+componentPrecio[1]
            }
        }

    return `Para armar una maquina necesitas: $${sumaTotal}`;
};

/* 2.  cantidadVentasComponente(componente): recibe el nombre de un componente
    y devuelve la cantidad de veces que fue vendido. La lista de ventas no se 
    pasa por parámetro, se asume que está identificada por la variable ventas.

    4.  componenteMasVendido(): Devuelve el nombre del componente que más ventas
    tuvo históricamente. El dato de la cantidad de ventas es el que indica la
    función cantidadVentasComponente*/

    const cantidadVentasComponente = (componente)=>{
        let contadorVtas=0;
        for(let venta of ventas){
            for(let component of venta[6]){
                if(component == componente){
                    contadorVtas++;
                }
            }
        }
        return `${componente} fue vendido ${contadorVtas} veces`;
    };
    
    const componenteMasVendido = () =>{
        let masFrecuente=1;
        let acumuladorCompo=0;
        let componenteMasVendido;
        let arrComponente =[];
       for(let venta of ventas){
           for(let componentes of venta[6]){
            arrComponente.push(componentes);
           }   
        }
       for (let i = 0; i < arrComponente.length; i++) {
        acumuladorCompo = 0
        for (let j = i; j < arrComponente.length; j++) {
          if (arrComponente[i] == arrComponente[j]){
            acumuladorCompo++;
          }
          if (masFrecuente < acumuladorCompo) {
            masFrecuente = acumuladorCompo;
            componenteMasVendido = arrComponente[i];
          }
        }
    }
      return `El componente mas vendido fue: ${componenteMasVendido}`
    }
    

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


    test('Devuelve el importe total para armar una maquina',()=>{
        expect(precioMaquina('Monitor GPRS 3000', 'Motherboard ASUS 1500', 'HDD Toyiva', 'RAM Quinston')).toMatch("Para armar una maquina necesitas: $520");
    });

    test('Devuelve la cantidad de ventas por componente',()=>{
        expect(cantidadVentasComponente('Motherboard ASUS 1500')).toMatch("Motherboard ASUS 1500 fue vendido 2 veces");
    });


