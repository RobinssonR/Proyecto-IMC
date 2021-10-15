<template>

<div>
    <h1 class= "titulo">Registrar usuario administrador</h1>

    <aside>
        <form  class ='formulario' >

            <label for="inputNombre" class="form-label">Nombre usuario</label>
            <input type="text" class="form-control" id="inputNombre" v-model = 'administrador.nombre'>
            <div v-if="submited && !$v.administrador.nombre.required">Es un campo obligatorio</div>
            <b></b>
            <select class="form-select" aria-label="Default select example">
            <option selected>Tipo de documento de identidad</option>
            <option value="1">Tarjeta de identidad</option>
            <option value="2">Cedula de ciudadania</option>
            <option value="3">Cedula de extranjeria</option>
            </select>
            <label for="inputDocumento" class="form-label">Numero de documento</label>
            <input type="text" class="form-control" id="inputDocumento" v-model = 'administrador.documento'>
            <div v-if="submited && !$v.administrador.documento.required">Es un campo obligatorio</div>
            <label for="inputProfesion" class="form-label">Profesion</label>
            <input type="text" class="form-control" id="inputProfesion" v-model = 'administrador.profesion'>
            <div v-if="submited && !$v.administrador.profesion.required">Es un campo obligatorio</div>
            <label for="inputEntidad" class="form-label">Entidad</label>
            <input type="text" class="form-control" id="inputEntidad" v-model = 'administrador.entidad'>
            <div v-if="submited && !$v.administrador.entidad.required">Es un campo obligatorio</div>
            <label for="inputTelefono" class="form-label">Telefono de contacto</label>
            <input type="text" class="form-control" id="inputTelefono" v-model = 'administrador.telefono'>
            <label for="inputCorreo" class="form-label">Correo electronico</label>
            <input type="text" class="form-control" id="inputCorreo" v-model = 'administrador.correo'>
            <div v-if="submited && !$v.administrador.correo.required">Es un campo obligatorio</div>
            <div v-if="submited && !$v.administrador.correo.email">correo incorrecto xxx@prueba.com</div>
            <label for="inputEps" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="inputContrasena1" v-model = 'administrador.contrasena1'>
            <label for="inputContrasena2" class="form-label">Repita Contraseña</label>
            <input type="password" class="form-control" id="inputContrasena2" v-model = 'administrador.contrasena2'>
            <button @click="procesar()" class="submit btn btn-primary" type="button">Guardar y registrar</button>
        </form>

    </aside>
</div>
</template>

<script>

import {
    required,
    email,
   
   

} from 'vuelidate/lib/validators';

export default {
    name: 'RegistroAdmin',
    data () {
        return {
            submited:false,
            administrador: {
                nombre:'',
                documento: '',
                profesion: '',
                entidad: '',
                telefono: '',
                correo: '',
                contrasena1: '',
                contrasena2: '',
            }
        }
    },


    methods: {
        procesar(){
            this.submited = true;
            this.$v.$touch();
            if(this.$v.$invalid){
                return false;
            }

            //alert(this.administrador);

        }
    },

    validations: {

        administrador:{
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
            profesion:{
                required,
            },
            entidad:{
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

.submit {
    color: aliceblue;
    background-color: #1a116e;
    margin-top: 25px;

        }

</style>