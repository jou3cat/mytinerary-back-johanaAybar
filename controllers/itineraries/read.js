import Itineraries from '../../models/Itineraries.js';


export default async (req, res)=> {   
//req:objeto con todos los requerimientos que envia el cliente 
//res: objeto de respuesta a devolver al cliente 
try{
   let allItineraries=await Itineraries.find( )
   //find: busca todos (en este caso itinerarios)
   return res.status(200).json({
       success: true,
       message:'itineraries found',
       response: allItineraries
   })

} catch(error){
   return res.status(400).json({
       success: false,
       message:'not found',
       response: null
   })

}
}