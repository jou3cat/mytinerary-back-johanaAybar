import User from "../../models/User.js";

export default async (req, res, next)=> {   
    //req:objeto con todos los requerimientos que envia el cliente 
    //res: objeto de respuesta a devolver al cliente 
   try{
       let oneUser=await User.findOne({_id:req.params.id} ).select("mail photo -_id")   //busca segun el objeto de condiciones (en este caso le paso el id, podria pasarle el mail, el nombre, etc)
      // let oneUserId= await User.findById(req.params.id)        //busca solo por id
       if (oneUser){
       return res.status(200).json({
           success: true,
           message:'users found',
           response: oneUser
        
       })
    }
    else{
        return res.status(400).json({
            success: false,
            message:'not found User',
            response: null
        })
    }
   } catch(error){
      next(error)
   
   }
   }
