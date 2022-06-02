# APIBOOKS
#
# APIBOOKS es una API enfocada para el funcionamiento de un e-commerce sobre libros, y otros productos adicionales.



# * [Introduction]
    APIBOOKS es una API enfocada para el funcionamiento de un e-commerce para la venta de libros, y otros productos adicionales.
    Esta API esta basada en una base de datos de libros, y otros productos adicionales.
    utiliza una API RESTful para el manejo de datos, con un servidor de NodeJS, en el puerto 3001. ( localhost:3001 )

   

# * [Funciones]
#  Registro de usuarios: consulta el archivo Users.js  se utiliza el metodo POST y la ruta '/createUser'. El body de la peticion debe contener los siguientes campos:
   * email: correo electronico del usuario.
   * password: contraseña del usuario.
   * name: nombre del usuario.
   * lastname: apellido del usuario.
   * address: direccion del usuario.
#




#   Autenticación de usuarios: consulta el archivo Users.js  se utiliza el metodo GET y la ruta '/login'. El body de la peticion debe contener los siguientes campos:
   * email: correo electronico del usuario.
   * password: contraseña del usuario.
#



#   Perfil de Usuarios: consulta el archivo Users.js  se utiliza el metodo PUT y la ruta '/users/:email/update' El body de la peticion debe contener los siguientes # #   campos:
   * email: correo electronico del usuario.
   * password: contraseña del usuario.
   * name: nombre del usuario.
   * direccion: direccion del usuario.
#



#   Inventario de productos: consulta el archivo Products.js  se utiliza el metodo GET y la ruta '/products', para obtener todos los productos.
#   Agregar libros:  consulta el archivo Products.js  se utiliza el metodo POST y la ruta '/createProduct', para agregar un producto. El body de la peticion debe      #   contener los siguientes campos:
   * name: nombre del producto.
   * description: descripcion del producto.
   * price: precio del producto.
   * stock: stock del producto.
   * image: imagen del producto.
   * author: autor del producto.
   * editorial: editorial del producto.
   * codigo: codigo del producto.
   * ISBN: ISBN del producto.
   * category: categoria del producto.


#   

#   Consulta de productos por Id:   consulta el archivo Products.js  se utiliza el metodo GET y la ruta '/products/:productId', para obtener un producto por su Id.

#   Actualizar productos: consulta el archivo Products.js  se utiliza el metodo PUT y la ruta '/updateProduct/', para actualizar un producto. El body de la peticion debe contener los siguientes campos:
   * name: nombre del producto.
   * description: descripcion del producto.
   * price: precio del producto.
   * stock: stock del producto.
   * image: imagen del producto.


#   El usuario coloca un producto en el carrito: consulta el archivo Cart.js  se utiliza el metodo POST y la ruta '/users/:email/cart', para agregar un producto al carrito. El body de la peticion debe contener los siguientes campos:
   * productId: id del producto.
   * amount: cantidad del producto.
#




#  [Credenciales]
 En el archivo .env se encuentran las credenciales de la API, para poder utilizarla.
 se debe de colocar en el archivo .env:
 * DB_USER=
 * DB_PASSWORD=
 * DB_HOST=localhost:
 * DEV_ACCESS_TOKEN = 
 #



#  [Tecnologias utilizadas]
 * NodeJS
    * Express
    * postgreSQL
    * sequelize
    * jwt (Json Web Token)
    #
    
    

#  [Autenticacion]
 Para la autenticacion de usuarios se utiliza el JWT, que es una libreria que nos permite crear un token de acceso, y enviarlo al cliente, para que el cliente pueda autenticarse.
    Para crear el token se utiliza el metodo sign, que recibe como parametros el payload, que es el contenido del token, y la clave secreta, que es la que se utiliza para encriptar el token.
    Para obtener el payload se utiliza el metodo verify, que recibe como parametros el token, y la clave secreta, que es la que se utiliza para encriptar el token.
    Este token se utiliza en el header de la peticion, para autenticar al usuario.
    En esta API se utiliza el metodo verify, para validar el token, y si es valido, se puede continuar con la peticion.
    #



