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

const precioMaquina = (componentes) =>{ 
    let sumaTotal=0;
    for(let componentPrecio of precios){
        for(let componente of componentes){
            if (componentPrecio[0] == componente){
                sumaTotal+=componentPrecio[1]
            }
        }
    }
return sumaTotal;
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
        return componenteMasVendido;
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
        return vtasTotalesSuc;
        
    }

/*  6.  mejorVendedora(): Devuelve el nombre de la vendedora que más ingresos generó */

const mejorVendedora = () => {
    let contador = 0;
    let mejorVendedora= "";
 
    for(let i=0; i<vendedoras.length; i++){
        const vendedora= ventasVendedora(vendedoras[i]);
        if(vendedora>contador){
            contador = vendedora;
            mejorVendedora = vendedoras[i] 
        }
    }
    return mejorVendedora;
}


/*  7.  ventaPromedio(): Debe retornar el importe promedio por venta, como un número
    entero sin decimales redondeado siempre para abajo. */

const ventaPromedio = () => {

    let ventasPromedio = 0;
    
    for (let venta of ventas) {
        precios.forEach(precio => {
            venta[6].forEach(itemVendido => {
                if (itemVendido === precio[0]) {
                    ventasPromedio += precio[1];
                }
            })
        });
    }
    let promedio = ventasPromedio / ventas.length
    return Math.floor(promedio);
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

const agregarVenta = (dia, mes, anio, vendedora, sucursal, componentes) => {
    ventas.push([obtenerIdVenta(), dia, mes, anio, vendedora, sucursal, componentes])
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


