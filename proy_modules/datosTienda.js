/*const {Producto,ProductosTienda} = require('./clases');: Esta línea importa las 
clases Producto y ProductosTienda desde el archivo clases.js.*/
const {Producto,ProductosTienda} = require('./clases');
/*const {Producto,ProductosTienda} = require('./clases');: Esta línea importa las clases
 Producto y ProductosTienda desde el archivo clases.js.*/ 
const nuevosProductos = async ()=> {
  //crea una clase producto
  const producto = new Producto ();
  //muestra un mensaje a la consola
  console.log('************************************************'.yellow);
  console.log('*'.yellow+'             Datos nuevo producto            **'.yellow);
  console.log('************************************************\n'.yellow);

  //utiliza el bucle await para recopilar los datos del producto del usuario utilizando una funcion
  //establece los valores de los atributos del producto utilizando datos
  //devuelve el producto creado
  mensaje = 'Digite codigo del producto => ';
  producto.setCodigoProducto = await digitarDato(mensaje);

  /*esto sirve para establecer el valor de una propidad de un objeto, para ello utiliza un metodo
  que le permite asignar un valor a una propiedad*/
  mensaje = 'Digite Nombre del producto => ';
  producto.setNombreProducto = await digitarDato(mensaje);
  //la variable contiene un texto que indica al usuario que debe ingresar

  mensaje ='Digite Inventario del producto => ';
  //se llama la funcion para que el susuario ingrese el inventario del producto
  opt = await digitarDato (mensaje);
  /*se utilia la funcion pareInt para convertir el valor ingresado (en forma de cadena de texto)
  en un numero entero. La variable (opt) almacena el valor ingresado por el usuario*/
  producto.setInventarioProducto = parseInt (opt);
  
  //crea un mensaje que le indica al usuario que debe ingresar el precio del producto 
  mensaje = 'Digite Precio del producto => ';
  //llamada a la función para que el usuario pueda ingresar el precio del producto
  opt = await digitarDato(mensaje);
  //convierte el valor ingresado en un numero decimal(en lugar de texto) utilizando la funcion perseFloat
  producto.setPrecioProducto= parseFloat (opt);
  //devuelve el objeto con la propiedad precioProducto actualizada
  return producto;
  
}
//esta funcion lee un dato ingresado por el usurio en la consola y lo devuelve como resultado
const digitarDato = (mensaje) =>{
    return new Promise( resolve =>{
      //definimos la interfaz del teclado para que el usuario interactue
      const readline = require ('readline').createInterface({
        
        input: process.stdin,//Node espera lo que digita el el usuario
        output: process.stdout//Node muestra en la consola
      });
    //crea la interfaz definida
    readline.question(`${mensaje}`, (opt) => {
        
      readline.close(); //se utiliza para crear una instancia de la interfaz
      resolve(opt);//se emplea para indicar que la promesa se ha cumpido con exito
    })
    })
}
  /*esta funcion  es utilizada pra pausar la ejecucuin del programa hasta que el usuario presione 
  la tecla 'enter', esto permite al usuario leer los datos ingresados antes de que se ejecute cualquier
  codigo adicional
  */
  const pausa = () =>{
    return new Promise( resolve =>{
      
      const readline = require ('readline').createInterface({
        
        input: process.stdin,
        output: process.stdout
      });
      
      readline.question(`\nPresione ${'ENTER'} para continuar\n`, (opt)=> {
        
        readline.close();
        resolve();
      })
    })
  }
  //se exportan los modulos para que se puedan utiizar en otros modulos de node.js
  module.exports ={
    pausa,
    digitarDato,
    nuevosProductos
    }
