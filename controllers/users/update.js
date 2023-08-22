import User from "../../models/User.js";

export default async (req, res)=> {   
    //req:objeto con todos los requerimientos que envia el cliente 
    //res: objeto de respuesta a devolver al cliente 
   try{
       let updatedUser=await User.findByIdAndUpdate( 
        req.params.u_id,
        req.body,
        {new:true}          //por default en FALSE y devuelve el objeto antes de la modificación
                            //Si lo cambio a TRUE devuelve el objeto LUEGO de la modificación
        ).select("name photo mail")
       
       return res.status(200).json({
           success: true,
           message:'users updated',
           response: updatedUser
       })
   
   } catch(error){
       return res.status(400).json({
           success: false,
           message:'not updated',
           response: null
       })
   
   }
   }
