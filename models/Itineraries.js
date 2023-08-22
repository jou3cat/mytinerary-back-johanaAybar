import {connect, model, Schema, Types} from 'mongoose';

let collection = 'itineraries'
let schema=new Schema ({
    name: {type:String, required:true},
    city_id: {type:String, required:true},
    price:{type:Number},
    duration:{type:Number},
    tags: {type:Array},
    photo: {type:String, required:true},
    //para relacionar datos en mongo es necesario referenciar el dato hacia la coleccion que necesito relacionar
})


//estoy parado en el modelo city de la coleccion cities y necesito relacionar la propiedad admin_id con la coleccion users
//esto lo logro referenciando con la propiedad ref:"nombre de la coleccion a referenciarse"

let itinerarie = model(collection, schema)

export default itinerarie