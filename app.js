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
  /* crea una nueva instancia de objeto y llama a su constructor. En este caso estamos creando una
  instancia de la clase productos tienda */
  let productosTienda = new ProductosTienda;
  
  console.log('******************************'.blue);
  console.log('*'.blue+'     Paso 1:Inicio Datos    *'.blue);
  console.log('******************************\n'.blue);
  //carga la informacion de los rpoductos desde un archivo disco
  productosTienda.cargarArchivoProducto();
  //muestra en la salida estandar del sistema
  productosTienda.mostrarProductos ();
  
  //hacer una pausa para dar tiempo al uuario de ver la informacion 
  opt = await pausa ();
   
   do{
        console.log('******************************'.green);
        console.log('*'.green+'  Paso 2:Datos usuario      *'.green);
        console.log('*****************************\n'.green);
  //permite al usuario digitar un nuevo producto y lo agrega a la lista e productos 
        let producto1 = await nuevosProductos();
        productosTienda.getListaProductos.push(producto1);
        productosTienda.mostrarProductos();
  //hace una pausa para dar tiempo al usuario
        opt = await pausa ();
 /*Pregunta al usuario si desea digitar otro producto, si la respuesta es si, vulve a repetir los
 pasos 2 y 3 */
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
  //cuando el usuario no desea ingresar mas productos se limpia la pantalla 
  console.clear();
  console.log('******************************');
  console.log('*Paso 3:Grava archivos datos *');
  console.log('****************************\n');
//se muestra el menu de opciones 
  productosTienda.grabaArchivoProductos('./datos.json');
  //realiza ua pausa nuevamente 
  opt = await pausa();
  //agrega ua catidad de iventario a cada producto e la lista
  productosTienda.getListaProductos.forEach(producto => {
     producto.setInventarioProducto = Math.floor(Math.random () * (20-1) +1);
     
  });
  
 console.clear();
 console.log('**********************************');
 console.log('*  Paso 4:Graba datos procesados *');
 console.log('********************************\n');
 
 //llama a la clase inventarios que extiende a tiendas
 productosTienda.grabaArchivoProductos();
 //se agrega ua cantidad al inventario a cada lista y se graban los datos procesados e un archivo
 productosTienda.mostrarProductos();
 //hace una pausa
 opt = await pausa ();
  
}


 
 main();