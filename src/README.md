# PRIMERA ENTREGA DEL PROYECTO FINAL

Se trata de un servidor basado en Node.JS y express, que escucha en el puerto 8080 y dispone de dos grupos de rutas: /products y /carts. Dichos endpoints están implementados con el router de express.

## Manejo de Productos

Para el manejo de productos, el cual tiene su router en /api/products/ 

### La ruta raíz GET / 

Lista todos los productos

```
GET http://localhost:8080/api/products
```

### La ruta raíz GET / incluyendo la limitación ?limit

A step by step series of examples that tell you how to get a development env runningLista solo la cantidad de productos establecida en la cláusula ?limit

Say what the step will be

```
GET http://localhost:8080/api/products?limit=2
```

Solamente listará 2 productos

### La ruta GET /:pid

Solamente trae el producto con el id proporcionado

```
GET http://localhost:8080/api/products/b76f5ae5-8d02-498b-b759-bd7944b799b6
```

Lista solo el producto cuyo ID es b76f5ae5-8d02-498b-b759-bd7944b799b6

### La ruta raíz POST /

Agrega un nuevo producto con los campos:
id: Number/String
title:String,
description:String
code:String
price:Number
status:Boolean (true por defecto)
stock:Number
category:String
thumbnails:Array de Strings que contenga las rutas donde están almacenadas las imágenes referentes a dicho producto

Todos los campos son obligatorios, a excepción de thumbnails

```
POST http://localhost:8080/api/products/
```

El body es un objeto de tipo JSON

```
 {
    "title": "Producto 08",
    "description": "Este es la descripcion del Producto 08",
    "price": 8,
    "thumbnail": [],
    "code": "Code 08",
    "stock": 8,
    "category": "Productos"
 }
```
#### Antes de agregar un producto a la base de datos:
El middleware checkProductCode, verifica que el código del producto no exista en la base de datos.
El MIddleware checkProductUndefined verifica que todos los campos existan 

### La ruta PUT/:id

Toma el producto identificado por id y lo actualiza por los campos enviados desde body. 

title:String,
description:String
code:String
price:Number
stock:Number
category:String
thumbnails:Array de Strings que contenga las rutas donde están almacenadas las imágenes referentes a dicho producto

Todos los campos son obligatorios, a excepción de thumbnails

```
PUT http://localhost:8080/api/products/b76f5ae5-8d02-498b-b759-bd7944b799b6
```

El body es un objeto de tipo JSON

```
{
    "title": "Producto 05",
    "description": "Este es la nueva descripcion del Producto 05",
    "price": 5,
    "thumbnail": [],
    "code": "Code 05",
    "stock": 5,
    "category": "Productos"
}
```
En el ejemplo se actualizará el producto con el ID b76f5ae5-8d02-498b-b759-bd7944b799b6 con los valores enviado en el body

#### Antes de Actualizar un producto a la base de datos:
El middleware checkProductId, verifica que el ID del producto, que se quiere modificar, exista en la base de datos.
El MIddleware checkProductUndefined verifica que todos los campos existan 

### La ruta DELETE/

Borra el producto identificado por id 

```
DELETE http://localhost:8080/api/products/d1ed5432-52b3-4772-9ad1-215226822157
```

En el ejemplo se borrará el producto con el ID d1ed5432-52b3-4772-9ad1-215226822157

#### Antes de Borrar un producto a la base de datos:
El middleware checkProductId, verifica que el ID del producto que se quiere eliminar, exista en la base de datos.


## Manejo de Productos

Para el manejo de carrito, el cual tiene su router en /api/carts/ 

### La ruta raíz GET / 

Lista todos los carritos

```
GET http://localhost:8080/api/carts/
```

### La ruta raíz GET / incluyendo la limitación ?limit

Lista solo la cantidad de productos establecida en la cláusula ?limit

```
GET http://localhost:8080/api/carts?limit=2
```

Solamente listará 2 carritos

### La ruta GET /:pid

Solamente trae el carrito con el id proporcionado

```
GET http://localhost:8080/api/carts/33a32a14-8a88-4837-9e3f-8ada729592d2
```

Lista solo el carrito cuyo ID es 33a32a14-8a88-4837-9e3f-8ada729592d2

### La ruta raíz POST /

Agrega un nuevo carrito con los campos:

id: Number/String
products: Array de objetos que contiene:
    {
        product: el ID del productos 
        quantity: el número de ejemplares de dicho producto. 
    } 
        

```
POST http://localhost:8080/api/carts/
```

### La ruta POST  /:cid/product/:pid 

Agrega un producto identificado por el ID pid al carrito con el ID cid. 

title:String,
description:String
code:String
price:Number
stock:Number
category:String
thumbnails:Array de Strings que contenga las rutas donde están almacenadas las imágenes referentes a dicho producto

Todos los campos son obligatorios, a excepción de thumbnails

```
POST http://localhost:8080/api/carts/33a32a14-8a88-4837-9e3f-8ada729592d2/product/2047d72d-e7bf-4cfb-a1ff-6d2de93898ea
```

Agrega una unidad del producto 2047d72d-e7bf-4cfb-a1ff-6d2de93898ea al carrito cuyo ID es 33a32a14-8a88-4837-9e3f-8ada729592d2

Si el producto ya existe en ese carrito, se incremante la cantidad (quantity) en una unidad.
Si el producto no existe en el carrito, se agrega al carrito con una cantidad (quantity) de 1.


#### Antes de Actualizar un carrito:
El middleware checkCartId, verifica que el ID del carrito, que se quiere actualizar,  exista en la base de datos.
El MIddleware checkCartProductId verifica que el producto que se quiere agregar exista en la base de datos de productos

### La ruta DELETE/

Borra el carrito identificado por id proporcionado

```
DELETE http://localhost:8080/api/carts/a7e42a86-e9a7-4a6e-93ef-e50d1062dea6
```

En el ejemplo se borrará el carrito con el ID a7e42a86-e9a7-4a6e-93ef-e50d1062dea6

#### Antes de Borrar un producto a la base de datos:
El middleware checkCartId, verifica que el ID del carrito qque se quiere eliminar exista en la base de datos.


## Built With

* [Dropwizard](https://github.com/expressjs/express) - web framework for Node.js.
* [uuid](https://github.com/uuidjs/uuid) - Unique ID Generation

## Author

* **Adrian Pablo Prado** - [Repositorio de Gihub](https://github.com/Drixar)



