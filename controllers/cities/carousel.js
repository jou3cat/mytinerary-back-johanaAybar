import City from "../../models/City.js";

export default async(req, res, next) => {  
    try{
        let all= await City.find({}, 'city photo').sort({fundation:-1}).limit(12)  // limito a 12 ciudades porque si por ejemplo pongo 15 se me rompe el carousel, que va poniendo de a 4 imagenes 
        let count= await City.countDocuments()
        return res.status(200).json({
            success:true,
            message:'cities to show on carousel',
            data_carousel:all,
            count               //count : count //Estructuracion

        })
    }catch (error){
        next(error)
    }
}

