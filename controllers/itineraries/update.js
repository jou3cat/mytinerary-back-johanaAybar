import Itineraries from '../../models/Itineraries.js';

export default async (req, res, next)=> {   
    //req:objeto con todos los requerimientos que envia el cliente 
    //res: objeto de respuesta a devolver al cliente 
   try{
       let updatedItineraries=await Itineraries.findByIdAndUpdate(
        req.params.id, 
        req.body,
        {new:true}
        ).select('name city_id price duration tags photo')

        if (updatedItineraries){
            return res.status(200).json({
                success:true,
                message:'city updated',
                response:updatedItineraries
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
