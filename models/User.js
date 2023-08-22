import {model, Schema} from "mongoose";

//ahora defino el espacio virtual donde se van a guardar todos los documentos/ modelos, es decir la COLECCION (conjunto de documentos / modelos de datos)

let collection= 'users'

//Lo siguiente es definir el schema de datos del modelo
//es decir, el molde / forma que tiene que tener mi modelo de datos
let schema=new Schema({
    name: {type:String, required:true},  //por default todos los datos son opcionales (required:false)
    lastName: {type:String},             //si es opcional no necesito agregar el required
    mail: {type:String, required:true, unique:true}, //unique:true comprueba que el mail sea unico (no hay mails duplicados)
    photo: {type:String, default: "https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg"},   //default vuelve al parametro opcional, en caso que el cliente mande la foto, la usa, sino, usa la foto default
    password: {type:String, required:true},
    country: {type:String, required:true}
})

//para crear un modelo de datos utilizo el metodo model pasando como parametros donde tengo que crear los documentos y con que forma 
let User=model(collection,schema)

export default User
