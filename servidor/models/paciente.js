import mongoose from 'mongoose';
const Shema = mongoose.Schema;

const pacienteSchema = new Shema({

    nombre:{type:String, required:[true]},
    documento: {type:String, required:[true]},
    fechaNacimiento: {type:Date, required:[true] },
    direccion: String,
    telefono: String,
    correo: {type:String, required:[true] },
    eps: String,
    informacion: String,
});

//convertir a modelo

const Paciente= mongoose.model('Paciente',pacienteSchema);
export default Paciente;