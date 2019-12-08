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

/*
    1.  precioMaquina(componentes): recibe un array de componentes y devuelve 
    el precio de la máquina que se puede armar con esos componentes, que 
    es la suma de los precios de cada componente incluido.
*/
// El parametro como spread operator dentro de un array es lo mismo que 
// simplemente poner ... = (componentes) =>...
const precioMaquina = ([...componentes]) =>{ 
    let sumaTotal=0;
    for(let componentPrecio of precios){
        for(let componente of componentes){
            if (componentPrecio[0] == componente){
                sumaTotal+=componentPrecio[1]
            }
        }
    }
    //Deberia retornar solo el numero, no el texto
return `Para armar una maquina necesitas: $${sumaTotal}`;
}

/* 2.  cantidadVentasComponente(componente): recibe el nombre de un componente
    y devuelve la cantidad de veces que fue vendido. La lista de ventas no se 
    pasa por parámetro, se asume que está identificada por la variable ventas.*/

    const cantidadVentasComponente = (componente)=>{
        let contadorVtas=0;
        for(let venta of ventas){
            for(let component of venta[6]){
                if(component == componente){
                    contadorVtas++;
                }
            }
        }
        return contadorVtas;
    };


/* 3.  ventasVendedora(nombre): recibe por parámetro el nombre de una vendedora
    y retorna el importe total de ventas realizadas por dicha vendedora.*/

    const ventasVendedora = (nombre) =>{
        let contadorVtas=0;
        for(let venta of ventas){
            if(nombre == venta[4]){
                for(let componentVta of venta[6]){
                    for(let componentPrecio of precios){
                        if(componentVta == componentPrecio[0]){
                            contadorVtas+=componentPrecio[1]
                        }
                    }
                }
            }
        }
        return contadorVtas;
    }

   /*  4.  componenteMasVendido(): Devuelve el nombre del componente que más ventas
    tuvo históricamente. El dato de la cantidad de ventas es el que indica la
    función cantidadVentasComponente*/

    const componenteMasVendido = () => {
        let contador = 0;
        let componenteMasVendido= "";
        for(let precio of precios){
            const componenteVendido= cantidadVentasComponente(precio[0]);
            if(componenteVendido>contador){
                contador = componenteMasVendido;
                componenteMasVendido = precio[0] 
            }
        }
        // Debe devolver el nombre, no el texto entero.
        return `El componente mas vendido fue: ${componenteMasVendido}`;
    }

/*  5.  ventasSucursal(sucursal): recibe por parámetro el nombre de una sucursal y
    retorna el importe de las ventas totales realizadas por una sucursal sin 
    límite de fecha. */
    
    const ventasSucursal=(sucursal) =>{
        let vtasTotalesSuc=0;
        for(let venta of ventas){
            if(sucursal == venta[5]){
                for(let componentVta of venta[6]){
                    for(let componentPrecio of precios){
                        if(componentVta == componentPrecio[0]){
                            vtasTotalesSuc+=componentPrecio[1]
                        }
                    }
                }
            }
        }
        //Debe devolver el importe unicamente, no el texto
        return `El importe total de ventas que se realizaron en la sucursal '${sucursal}' fue $${vtasTotalesSuc}`;
        
    }

/*  6.  mejorVendedora(): Devuelve el nombre de la vendedora que más ingresos generó */

const mejorVendedora = () => {
    let contador = 0;
    let mejorVendedora= "";
    // Esto deberia loopear por las vendedoras, no por las ventas.
    // Yo hago el for cada vendedora y le paso como parametro esa vendedora y ya esta.
    // ASi no accedo a cada indice de un array mucho mas grande
    for(let venta of ventas){
        const vendedora= ventasVendedora(venta[4]);
        if(vendedora>contador){
            contador = vendedora;
            mejorVendedora = venta[4] 
        }
    }
    // Debe deolver el nombre de la vendedora unicamente, no el texto entero.
    return `La mejor vendedora fue: ${mejorVendedora}`;
}


/*  7.  ventaPromedio(): Debe retornar el importe promedio por venta, como un número
    entero sin decimales redondeado siempre para abajo. */

const ventaPromedio = () => {

    let ventasPromedio = 0;
    // CAntidad de ventas no sirve, se reemplaza por ventas.length
    let cantidadDeVentas = 0;

    for (let venta of ventas) {
        cantidadDeVentas++;
        precios.forEach(precio => {
            venta[6].forEach(itemVendido => {
                // precio: ['Monitor GPRS 3000', 200]
                // itemVendido: 'Monitor GPRS 3000'
                if (itemVendido === precio[0]) {
                    ventasPromedio += precio[1];
                }
            })
        });
    }

    // reemplazar cantidadDeVentas por ventas.length
    let promedio = ventasPromedio / cantidadDeVentas
    // Debe retornar el numero, no el texto.
    return `El promedio general es de $ ${Math.floor(promedio)} por cada venta`;
}

/*  8.  obtenerIdVenta(): Tiene que retornar un número aleatorio entre 100000000 y 
    99999999*/

const obtenerIdVenta = () => {
    return Math.floor(Math.random() * (999999999 - 100000000 + 1) + 100000000);
};

/*  9.  agregarVenta(dia, mes, anio, vendedora, sucursal, componentes): recibe por
 parámetro todos los datos de una venta, y los agrega en el array de ventas.
 Al igual que las ventas que ya están previamente creadas, además de estos 
 datos necesitamos agregar el primer dato que es un identificador de la venta.
 Para agregar este dato, tenemos que usar la función desarrollada en el punto 
 anterior obtenerIdVenta */

 // El spread operator de componentes no es necesario si le paso un array como parametro.
 // Solo con poner ", sucursal, componentes) =>"  esta bien
const agregarVenta = (dia, mes, anio, vendedora, sucursal, ...componentes) => {
    // Componentes no necesita spread operator ni meter el resultado en un array. Solo con usar variable componentes esta bien.
    ventas.push([obtenerIdVenta(), dia, mes, anio, vendedora, sucursal, [...componentes]])
};

/**EJECUTABLES*/

console.log( precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]));
console.log( cantidadVentasComponente("Monitor ASC 543"));
console.log( ventasVendedora("Grace"));
console.log( componenteMasVendido());
console.log( ventasSucursal("Centro"));
console.log( mejorVendedora()); 
console.log( ventaPromedio()); 
console.log( obtenerIdVenta()); 



module.exports = {
    precioMaquina,
    cantidadVentasComponente,
    componenteMasVendido,
    obtenerIdVenta,
    agregarVenta,
    ventasVendedora,
    ventasSucursal,
    ventaPromedio,
    mejorVendedora
}


