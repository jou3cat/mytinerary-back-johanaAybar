import City from '../../models/City.js'

export default async (req, res, next)=> {   
    //req:objeto con todos los requerimientos que envia el cliente 
    //res: objeto de respuesta a devolver al cliente 
   try{
    console.log(req.query);  //QUERY es un objeto con todas las consultas/igualdades a buscar en la base de datos 
    let objetoDeBusqueda={}
    let objetoDeOrdenamiento={}
    if(req.query.admin_id){
        objetoDeBusqueda.admin_id=req.query.admin_id
    }
    if(req.query.sort){
        objetoDeOrdenamiento.city=req.query.sort  //agrego la propiedad por la cual quiero ordenar. Si es 1 ordena ascendentemente, si es -1 ordena de forma descendente
    }
    if(req.query.city){
        objetoDeBusqueda.city=new RegExp(req.query.city, 'i')   
        //new RegExp(req.query.title, 'i') 
    }
    // let allCities=await City.find({},'country city photo smalldescription admin_id' ).populate('admin_id', 'photo name mail -_id') 
       let allCities=await City
       .find(objetoDeBusqueda).select('country city photo smalldescription admin_id' )   //metodo de busqueda
       .populate('admin_id', 'photo name mail -_id')                                     //lo que quiero popular
       .sort(objetoDeOrdenamiento)                                                       //lo que necesito ordenar
       if (allCities.length>0 ){
        return res.status(200).json({
            success: true,
            message:'cities found',
            response: allCities
        })

       } else {
        return res.status(404).json({
            success: false,
            message:'no funciona',
            response: null
        })

       }
       
   
   } catch(error){
       next(error)
      }
   
   }
