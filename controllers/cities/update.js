import City from "../../models/City.js";

export default async (req, res, next)=> {   
    //req:objeto con todos los requerimientos que envia el cliente 
    //res: objeto de respuesta a devolver al cliente 
   try{
       let updatedCity=await City.findByIdAndUpdate(
        req.params.id, 
        req.body,
        {new:true}
        ).select('name photo mail')

        if (updatedCity){
            return res.status(200).json({
                success:true,
                message:'city updated',
                response:updatedCity
            })
        }else{
            return res.status(404).json({
                success:false,
                message:'not found',
                response: null
            })
        }
       
   } catch(error){
      next(error)
   
   }
   }
