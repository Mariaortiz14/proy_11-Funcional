// determinamos una clase poducto
class Producto {
    #codigoProducto;
    #nombreProducto;
    #iventarioProducto;
    #precioProducto;
    //usamos un metodo constructor
    constructor (){
      this.#codigoProducto='';
      this.#nombreProducto='';
      this.#iventarioProducto=0;
      this.#precioProducto=0;
    }
    
    //Definimos metodos setter y getter
    
    set setCodigoProducto (value){
      this.#codigoProducto = value;
      
    }
    get getCodigoProducto (){
      return this.#codigoProducto;
    }
    
    set setNombreProducto (value){
      this.#nombreProducto = value;
    }
    
    get getNombreProducto (){
      return this.#nombreProducto;
    }
    
    set setInventarioProducto (value){
      this.#iventarioProducto = value;
    }
    get getInventarioProducto (){
      return this.#iventarioProducto;
    }
    set setPrecioProducto (value) {
      this.#precioProducto = value;
    }
    get getPrecioProducto (){
      return this.#precioProducto;
    }
  }
  
  //creamos una clase de productos tienda
  
  class ProductosTienda {
    #listaProductos;
  // definimos metodo constructor    
    constructor (){
      this.#listaProductos = [];
      
    }
    
    get getListaProductos (){
      return this.#listaProductos;
    }
    //Creamos un metodo cargar archivo producto
    cargarArchivoProducto (){
      const datosArchivo = require ('../datos.json');
         //constante "contador" para que su valor no pueda ser modificado
       let contador = 0;
       // usamos if-else para depender si se cumnple la condicion o no
       if (datosArchivo.length > 0){
            datosArchivo.forEach(objeto => {
           contador ++;
           let producto =  new Producto;
           producto.setCodigoProducto = objeto.codigoProducto;
           producto.setNombreProducto = objeto.NombreProducto;
           producto.setInventarioProducto = objeto.inventarioProducto;
           producto.setPrecioProducto = objeto.precioProducto;
           this.#listaProductos.push(producto);
         });
         
       }else {
         console.log('ERROR,el archivo no se encuentra\n');
       }
       console.log(`Total productos cargados ==>` +`${contador}`)
    }
    //creamos un metodo grabar archivo producto
    grabaArchivoProducto(){
      const datosArchivo = require (`${archivo}`);
      //la constante "fs" permite leer, scribir, modificar y eliminar archivos en el sistema
      const fs = require ('fs');
      //creamos la constante instancia clases a objetos
      const instanciaClaseAObjetos = this.getListaProductos.map(producto => {
        return {
          codigoProducto: producto.getCodigoProducto,
          nombreProducto: producto.getNombreProducto,
          inventarioProducto: getInventarioProducto,
          precioProducto: producto.getPrecioProducto
        };
      });
      //convertir el array a cadena JSON
      const cadenaJson = JSON.stringify (instanciaClaseAObjetos,null,2);
      //variable con el nombre del archivo
      const nombreArchivo = 'datos.json';
     // Graba la cadena JSON en el archivo 
      fs.writeFileSync(nombreArchivo, cadenaJson, 'UTF-8');
      
      console.log(`Datos guardados en ${nombreArchivo}`);
    }  
    
    grabaArchivoProductos(){
      const datosArchivo = require ('../datos.json');
      const fs = require ('fs');

      const instanciaClaseAObjetos = this.getListaProductos.map(producto => {
          return {
            codigoProducto: producto.getCodigoProducto,
            nombreArchivo: producto.getNombreProducto,
            inventarioProducto: producto.getInventarioProducto,
            precioProducto: producto.getPrecioProducto
          };
      });
      //convertir el array a cadena JSON
      const cadenaJson = JSON.stringify(instanciaClaseAObjetos,null,2);
      //variable con el nombre del archivo
      const nombreArchivo = 'datos.json';
      // Graba la cadena JSON en el archivo
      fs,fs.writeFileSync(nombreArchivo, cadenaJson, 'UTF-8');
      
      console.log(`Datos guardados en ${nombreArchivo}`);
    }
    // creamos un metodo mostrar productos
    mostrarProductos (){
        this.getListaProductos.forEach (producto => {
            console.log('|     '+ producto.getCodigoProducto +'      |'+
                        '      '+ producto.getNombreProducto + '      |'+
                        '      '+ producto.getInventarioProducto+'      |'+ 
                        '      '+ producto.getPrecioProducto+ '       |');
      })
    }
  }
  //exportamos los modulos
  module.exports = {
    Producto,
    ProductosTienda
  }