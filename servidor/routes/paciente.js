import express from 'express';
const router = express.Router();

import Paciente from '../models/paciente'


//agregar un paciente

router.post('/nuevo-paciente', async(req, res)=>{

    const body=req.body;
    try {

        const pacienteDb= await Paciente.create(body);
        res.status(200).json(pacienteDb);

    }catch (error) {

        return res.status(500).json({
            mensaje:'ocurrio un error ',
            error
        })
        
    }
});

//Get con parametro

router.get('/paciente/:id', async(req, res)=>{

    const _id=req.params.id;

    try {

        const pacienteDb= await Paciente.findOne({_id});
        res.json(pacienteDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }



});

//Get con todos los documentos

router.get('/paciente',async(req,res)=>{

    try {

        const pacienteDb=await Paciente.find();
        res.json(pacienteDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }


});

//Delete eliminar una registro de paciente

router.delete('/paciente/:id', async(req,res)=>{


    const _id=req.params.id;

    try {

        const pacienteDb=await Paciente.findByIdAndDelete({_id});
        if(!pacienteDb){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el id indicado', error 
            }) 
        } 
        res.json(pacienteDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }
});

//Actualizar un registro de paciente

router.put('/paciente/:id', async(req,res)=>{

    const _id=req.params.id;
    const body =req.body;

    try {

        const pacienteDb= await Paciente.findByIdAndUpdate(_id,body,{new:true});
        res.json(pacienteDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }



})

//Exportacion de router
module.exports = router;