# Proyecto MERN 5

Hola 👋🏽 este es mi primer proyecto de Node, Express y MongoDB. He construido mi primer servidor para una API ficticia que te permite ingresar información en una web de adopción de gatitos 😸.

El modelo de datos de MongoDB es un objeto, donde tienes las siguientes claves distintas que serán requeridas:

```javascript
const document = {
  _id: "id_de_mongoDB",
  name: "nombre_del_gatito",
  race: "raza_del_gatito",
  color: "color_del_pelaje_del_gatito",
  age: "edad_del_gatito",
  responsiblePerson: "persona_responsable_del_gatito",
};
```

## Endpoints:

https://localhost:4001/api

### MODELO GATITOS:

| HTTP Request | Endpoint    | Descripción                    |
| ------------ | ----------- | ------------------------------ |
| GET          | /kittens    | Todos los gatitos registrados. |
| GET          | /kittens/id | Gatito por su id.              |
| POST         | /kittens    | Crear un nuevo gatito.         |
| PUT          | /kittens/id | Editar un gatito.              |
| DELETE       | /kittens/id | Borrar un gatito.              |

Adicional a esto, en el primer endpoint, podrás agregar un Query Parameter, donde con el parameter "filter" e ingresando un value, podrás filtrar dentro de las claves name, race, color y responsiblePerson.

#### Recuerda que para cualquier duda o comentario, puedes contactarme ✌🏼😊

![Gif gatito feliz](https://i.pinimg.com/originals/9e/e9/02/9ee902c4fcbed59c1c7f5a8ccabb0cc6.gif)
