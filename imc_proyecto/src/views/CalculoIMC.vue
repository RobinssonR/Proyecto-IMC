<template>

<div>
    <h1 class= "titulo">Información cita de control</h1>

    <aside>
        <form action="#" class ='formulario'>

            <label for="inputFecha" class="form-label">Fecha consulta</label>
            <input type="date" class="form-control" id="inputFecha" v-model = 'cita.fechaConsulta'>
            <div v-if="submited && !$v.cita.fechaConsulta.required">Es un campo obligatorio</div>
            <label for="inputNombre" class="form-label">Nombre paciente</label>
            <input type="text" class="form-control" id="inputNombre" v-model = 'cita.nombre'>
            <div v-if="submited && !$v.cita.nombre.required">Es un campo obligatorio</div>
            <label for="inputDocumento" class="form-label">Numero de documento</label>
            <input type="text" class="form-control" id="inputDocumento" v-model = 'cita.documento'>
            <div v-if="submited && !$v.cita.documento.required">Es un campo obligatorio</div>
            <label for="inputEdad" class="form-label">Edad</label>
            <input type="text" class="form-control" id="inputEdad" v-model = 'cita.edad'>
            <label for="inputPeso" class="form-label">Peso</label>
            <input type="text" class="form-control" id="inputPeso" v-model = 'cita.peso'>
            <div v-if="submited && !$v.cita.peso.required">Es un campo obligatorio</div>
            <label for="inputEstatura" class="form-label">Estatura</label>
            <input type="text" class="form-control" id="inputEstatura" placeholder="Escribir estatura con punto" v-model = 'cita.estatura'>
            <div v-if="submited && !$v.cita.estatura.required">Es un campo obligatorio</div>

            <button class="btn btn-primary" type="button" value= "calcular">Calcular</button>
            <input type="text" class="form-control" id="resultado" placeholder="Resultado">
        </form>
    
    </aside>

        <button @click="validar()" class="btn btn-primary" type="button" value= "guardar">Guardar</button>

        <h2 class= 'titulo' >Ver recomendaciones</h2>

        <div id="flotante" style="display:none;">Interpretación de resultados IMC </div>
            <table class= "tabla" style="width:80%">
                <tr>
                    <th>IMC</th>
                    <th>Nivel de peso</th>
                    <th>Recomendación</th>
                </tr>
                <tr>
                    <td>Por debajo de 18.50</td>
                    <td>Bajo peso</td>
                    <td>Hable con su nutricionista o médico tratante para establecer
              las posibles causas del bajo peso y evaluar si requiere ganar 
              masa muscular.
                    </td>
                 </tr>
                <tr>
                    <td>Entre 18.50 y 24.90</td>
                    <td>Normal</td>
                    <td>Mantener un peso saludable reduce el riesgo de enfermedades crónicas 
              asociadas al sobrepeso y la obesidad, se recomienda continuar con una alimentación
              saludable acompañada de actividad física.
                    </td>
                 </tr>
        <tr>
            <td>Entre 25.00 y 29.90</td>
            <td>Sobrepeso</td>
            <td>Las personas con sobrepeso tienen mayor riesgo de sufrir enfermedades relacionadas 
                con el corazón, diabetes y elevados niveles de colesterol, por tanto, se recomienda
                realizar actividad física e incluir una dieta saludable.
            </td>
          </tr>
        <tr>
            <td>30.00 o más</td>
            <td>Obesidad</td>
            <td>Las personas obesas tienen mayor riesgo de afecciones crónicas, como la 
                hipertensión arterial, diabetes y colesterol alto, por tanto debe evitar ganar
                más peso y tratar de perder como mínimo un 10% del peso actual para disminuir el 
                riesgo de enfermedades
            </td>
        </tr>
      </table>
    

</div>
</template>

<script>
import {
    required,

} from 'vuelidate/lib/validators';

export default {
    name: 'CalculoIMC',
    data () {
        return {
            submited:false,
            cita: {
                fechaConsulta:'',
                nombre:'',
                documento: '',
                edad: '',
                peso: '',
                estatura: '',
            }
        }
    },


    methods: {
        validar(){
            this.submited = true;
            this.$v.$touch();
            if(this.$v.$invalid){
                return false;
            }

        }
    },

    validations: {

        cita:{

            fechaConsulta:{
                required,
            },
            nombre:{
                required,
            },
            documento:{
                required,
            },
            edad:{
                required,
            },
            peso:{
                required,
            },
            estatura:{
                required,
            },
            


        }

    }
}
</script>

<style>
.titulo {

    margin-left: 15px;
    color: rgb(24, 24, 163);
    margin-top: 20px;
}

.formulario {

    margin-left: 15px;
    margin-top: 10px;
    width: 750px;
}

.form-select {
    margin-top: 15px;
}

.form-label {

    margin-top: 15px;
    color: rgb(13, 13, 141);
}

.form-control {

    margin-top: 15px;
}

.botonRegistro {
    color: aliceblue;
    background-color: #1a116e;
    margin-top: 25px;

        }

.btn  {

    margin-top: 30px;
    margin-left: 50px;
    color: aliceblue;
}

.tabla {

    margin-top: 30px;
    margin-left: 20px;
}

table, th, td {
        border:1px solid rgb(13, 15, 85);
        align-items: center;
        }  
</style>
