import Itineraries from '../../models/Itineraries.js';

export default async (req, res, next)=> {   
    //req:objeto con todos los requerimientos que envia el cliente 
    //res: objeto de respuesta a devolver al cliente 
   try{
       let deletedItinerarie=await Itineraries.findByIdAndDelete(req.params.id)
        if (deletedItinerarie){
            return res.status(200).json({
                success:true,
                message:'city deleted',
                response:null
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
