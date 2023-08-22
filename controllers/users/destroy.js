import User from "../../models/User.js";


export default async (req, res)=> {   
    //req:objeto con todos los requerimientos que envia el cliente 
    //res: objeto de respuesta a devolver al cliente 
   try{
       let deletedUser=await User.findByIdAndDelete(req.params.id)
       
       return res.status(200).json({
           success: true,
           message:'user deleted',
           response: deletedUser
       })
   
   } catch(error){
       return res.status(400).json({
           success: false,
           message:'not deleted',
           response: null
       })
   
   }
   }
