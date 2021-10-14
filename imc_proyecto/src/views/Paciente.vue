<template>

<div>
    <h1 class= "titulo">Registrar paciente</h1>

    <aside>

        <form @submit.prevent="agregarPaciente()"  v-if="!editar" class ='formulario'>

            <label for="inputNombre" class="form-label">Nombre paciente</label>
            <input type="text" class="form-control" id="inputNombre" v-model = 'paciente.nombre'>
            <div v-if="submited && !$v.paciente.nombre.required">Es un campo obligatorio</div>
            <b></b>
            <select class="form-select" aria-label="Default select example">
            <option selected>Tipo de documento de identidad</option>
            <option value="1">Tarjeta de identidad</option>
            <option value="2">Cedula de ciudadania</option>
            <option value="3">Cedula de extranjeria</option>
            </select>
            <label for="inputDocumento" class="form-label">Numero de documento</label>
            <input type="text" class="form-control" id="inputDocumento" v-model = 'paciente.documento'>
            <div v-if="submited && !$v.paciente.documento.required">Es un campo obligatorio</div>
            <label for="inputFecha" class="form-label">Fecha de nacimiento</label>
            <input type="date" class="form-control" id="inputFecha" v-model = 'paciente.fechaNacimiento'>
            <label for="inputDireccion" class="form-label">Direccion</label>
            <input type="text" class="form-control" id="inputDireccion" v-model = 'paciente.direccion'>
            <label for="inputTelefono" class="form-label">Telefono de contacto</label>
            <input type="text" class="form-control" id="inputTelefono" v-model = 'paciente.telefono'>
            <div v-if="submited && !$v.paciente.telefono.required">Es un campo obligatorio</div>
            <label for="inputCorreo" class="form-label">Correo electronico</label>
            <input type="text" class="form-control" id="inputCorreo" v-model = 'paciente.correo'>
            <div v-if="submited && !$v.paciente.correo.required">Es un campo obligatorio</div>
            <div v-if="submited && !$v.paciente.correo.email">Es un campo obligatorio</div>
            <label for="inputEps" class="form-label">EPS</label>
            <input type="text" class="form-control" id="inputEps" v-model = 'paciente.eps'>
            <label for="inputAdicional" class="form-label">Informacion adicional</label>
            <input type="text" class="form-control" id="inputAdicional" v-model = 'paciente.informacion'>
            <button @click="registrar()" class="botonRegistro" type="submit">Guardar y registrar</button>
        </form>

    </aside>

    <b-alert
            :show="dismissCountDown"
            dismissible
            :variant="mensaje.color"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged"
    >   
            {{mensaje.texto}}
    </b-alert>
</div>
</template>

<script>

import {
    required,
    email,
   
   

} from 'vuelidate/lib/validators';

    
export default {
    name: 'Paciente',
    data () {
        return {

            mensaje: {color: 'success', texto: ''},
            dismissSecs: 5,
            dismissCountDown: 0,

            submited:false,

            pacientes:[],

            paciente: {
                nombre:'',
                documento: '',
                fechaNacimiento: '',
                direccion: '',
                telefono: '',
                correo: '',
                eps: '',
                informacion: '',
            }
        }
    },


    methods: {
        registrar(){
            this.submited = true;
            this.$v.$touch();
            if(this.$v.$invalid){
                return false;
            }

            //alert(this.administrador);

        },

        agregarPaciente () {

                this.axios.post('/nuevo-paciente',this.paciente)
                .then(res=>{

                    this.pacientes.push(res.data);
                    this.paciente.nombre='';
                    this.paciente.documento='';
                    this.paciente.fechaNacimiento='';
                    this.paciente.direccion='';
                    this.paciente.telefono='';
                    this.paciente.correo='';
                    this.paciente.eps='';
                    this.paciente.informacion='';

                    this.mensaje.color="success";
                    this.mensaje.texto="Paciente agregado"

                    this.showAlert();


                })
                .catch(e=>{
                    console.log(e.response);
                })

        },

        countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
        },

        showAlert() {
        this.dismissCountDown = this.dismissSecs
 },

    },

    validations: {

        paciente:{
            nombre:{
                required,
            },
            correo:{
                required,
                email
            },
            documento:{
                required,
            },
            eps:{
                required,
            },
            telefono:{
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

.botonRegistro {
    color: aliceblue;
    background-color: #1a116e;
    margin-top: 25px;

        }

</style>

    
   
   

    

  
    
    

    
    
    
        
  


    
    
       

