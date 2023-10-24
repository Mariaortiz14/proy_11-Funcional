//importamos modulos
require('colors');

const {Producto,ProductosTienda} = require ('./proy_modules/clases.js');

const {nuevosProductos, digitarDato, pausa} = require ('./proy_modules/datosTienda.js');
//La funcion main es una funcio asincrona
const main = async() => {
  let mensaje ='';//variable que inicializa su valor en unaa cadena vacia
  let opt ='';//Esta variable se utilizará para almacenar el valor ingresado por el usuario.
  let swDato = true;//se utiliza como una especie de interruptor para controlar si el programa debe seguir solicitando datos
  
  console.clear ();
  console.log('******************************'.blue);
  console.log('*'.blue+'     Proyecto datos         *'.blue);
  console.log('******************************'.blue);
  
  
   let productosTienda = new ProductosTienda;
  
  console.log('******************************'.blue);
  console.log('*'.blue+'     Paso 1:Inicio Datos    *'.blue);
  console.log('******************************\n'.blue);
  productosTienda.cargarArchivoProducto();
  productosTienda.mostrarProductos ();
  
  opt = await pausa ();
   
   do{
        console.log('******************************'.green);
        console.log('*'.green+'  Paso 2:Datos usuario      *'.green);
        console.log('*****************************\n'.green);
  
        let producto1 = await nuevosProductos();
        productosTienda.getListaProductos.push(producto1);
        productosTienda.mostrarProductos();
  
        opt = await pausa ();
  
        do{
            mensaje = `¿Desea digitar un nuevo producto? (SI/NO) => `;
            opt = await digitarDato (mensaje);
        }while (opt !=='SI' && opt !=='NO');
        if (opt == 'SI'){
            swDato = true;
        }else {
            swDato = false;
        }
}while(swDato);
  
  console.clear();
  console.log('******************************');
  console.log('*Paso 3:Grava archivos datos *');
  console.log('****************************\n');

  productosTienda.grabaArchivoProductos('./datos.json');
  opt = await pausa();
  
  productosTienda.getListaProductos.forEach(producto => {
     producto.setInventarioProducto = Math.floor(Math.random () * (20-1) +1);
     
  });
  
 console.clear();
 console.log('**********************************');
 console.log('*  Paso 4:Graba datos procesados *');
 console.log('********************************\n');
 
 productosTienda.grabaArchivoProductos();
 productosTienda.mostrarProductos();
 
 opt = await pausa ();
  
}


 
 main();