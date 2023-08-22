 import User from "../../models/User.js";

 export default async (req, res)=> {   
 //req:objeto con todos los requerimientos que envia el cliente 
 //res: objeto de respuesta a devolver al cliente 
try{
    let allUsers=await User.find( )
    //find: busca todos (en este caso usuarios)
    return res.status(200).json({
        success: true,
        message:'users found',
        response: allUsers
    })

} catch(error){
    return res.status(400).json({
        success: false,
        message:'not found',
        response: null
    })

}
}