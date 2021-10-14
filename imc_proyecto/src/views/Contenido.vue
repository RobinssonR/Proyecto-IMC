<template>

<div class= 'container'>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Paciente</th>
      <th scope="col">Documento</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in pacientes" :key="index">
      <th scope="row">{{item._id}}</th>
      <td>{{item.nombre}}</td>
      <td>{{item.documento}}</td>
      <td>
        <b-button class="btn-danger mx-2" @click="eliminarPaciente(item._id)">Eliminar</b-button>
        <b-button class="btn btn primary mx-2" @click="activarEdicion(item._id)">Editar</b-button>
      </td>
    </tr>
   
  </tbody>
</table>

<b-alert
            :show="dismissCountDown"
            dismissible
            :variant="mensaje.color"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged"
    >   
            {{mensaje.texto}}
    </b-alert>

    
    
    <aside>

        <h3 v-if="editar"  class= "titulo">Modificar registro paciente</h3>

        <form @submit.prevent="editarPaciente(pacienteEditar)" v-if="editar"  class ='formulario'>

            <label for="inputNombre" class="form-label">Nombre paciente</label>
            <input type="text" class="form-control" id="inputNombre" v-model = 'pacienteEditar.nombre'>
            <b></b>
            <select class="form-select" aria-label="Default select example">
            <option selected>Tipo de documento de identidad</option>
            <option value="1">Tarjeta de identidad</option>
            <option value="2">Cedula de ciudadania</option>
            <option value="3">Cedula de extranjeria</option>
            </select>
            <label for="inputDocumento" class="form-label">Numero de documento</label>
            <input type="text" class="form-control" id="inputDocumento" v-model = 'pacienteEditar.documento'>
            <label for="inputFecha" class="form-label">Fecha de nacimiento</label>
            <input type="date" class="form-control" id="inputFecha" v-model = 'pacienteEditar.fechaNacimiento'>
            <label for="inputDireccion" class="form-label">Direccion</label>
            <input type="text" class="form-control" id="inputDireccion" v-model = 'pacienteEditar.direccion'>
            <label for="inputTelefono" class="form-label">Telefono de contacto</label>
            <input type="text" class="form-control" id="inputTelefono" v-model = 'pacienteEditar.telefono'>
            <div v-if="submited && !$v.paciente.telefono.required">Es un campo obligatorio</div>
            <label for="inputCorreo" class="form-label">Correo electronico</label>
            <input type="text" class="form-control" id="inputCorreo" v-model = 'pacienteEditar.correo'>
            <label for="inputEps" class="form-label">EPS</label>
            <input type="text" class="form-control" id="inputEps" v-model = 'pacienteEditar.eps'>
            <label for="inputAdicional" class="form-label">Informacion adicional</label>
            <input type="text" class="form-control" id="inputAdicional" v-model = 'pacienteEditar.informacion'>
            <button class="btn btn-primary mx-2" type="submit">Modificar</button>
            <b-button class="btn btn-primary" type="submit" @click="editar=false" >Cancelar</b-button>

        </form>

    </aside>

</div>
</template>

<script>

export default {

    data() {
   
        return {

            pacientes:[],

            mensaje: {color: 'success', texto: ''},
            dismissSecs: 5,
            dismissCountDown: 0,

            paciente: {
                nombre:'',
                documento: '',
                fechaNacimiento: '',
                direccion: '',
                telefono: '',
                correo: '',
                eps: '',
                informacion: '',
            },

            editar:false,
            pacienteEditar:{}
            

        }

    },

    created() {

      this.listarPacientes();
    

    },


    methods: {

        listarPacientes(){

            this.axios.get('/paciente')
            .then((response)=>{

              this.pacientes=response.data;

            })

            .catch(e=>{
              console.log(e.response)
            })
        },

        countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
        },

        showAlert() {
        this.dismissCountDown = this.dismissSecs
        },

          eliminarPaciente(id){

            this.axios.delete(`/paciente/${id}`)
            .then(res=>{

              const index = this.pacientes.findIndex(item=> item._id===res.data._id);
              this.pacientes.splice(index,1);
              this.mensaje.color="success";
              this.mensaje.texto="Registro eliminado"

              this.showAlert();



            })
            .catch(e=>{
              console.log(e.response)

              })

          },

          activarEdicion(id){
            this.editar=true;
            this.axios.get(`/paciente/${id}`)
            .then(res=>{

              this.pacienteEditar=res.data;

            })

            .catch(e=>{
              console.log(e.response)

              })
          },


          editarPaciente(item){
            this.axios.put(`/paciente/${item._id}`, item)
            .then(res=>{

              const index= this.pacientes.findIndex(d=> d._id===res.data._id);
              this.pacientes[index].nombre=res.data.nombre;
              this.pacientes[index].documento=res.data.documento;
              this.pacientes[index].fechaNacimiento=res.data.fechaNacimiento;
              this.pacientes[index].direccion=res.data.direccion;
              this.pacientes[index].telefono=res.data.telefono;
              this.pacientes[index].correo=res.data.correo;
              this.pacientes[index].eps=res.data.eps;
              this.pacientes[index].informacion=res.data.informacion;

              this.mensaje.color="success";
              this.mensaje.texto="Registro modificado";
              this.showAlert();
              this.editar=false;

              


            })
             .catch(e=>{
              console.log(e.response)

              })
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

.btn {
    
    margin-top: 25px;

        }
</style>


