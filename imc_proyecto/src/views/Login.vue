<template>

<div>

  <h1 class= "titulo">ACCESO AL SISTEMA IMC</h1>

    <section id=admon class="administrador">

        <form>
          <label for="inputEmail3" class="form-label">Email</label>
          <input type="email" class="form-control" id="inputEmail3">
          <label for="inputPassword3" class="form-label">Contraseña</label>
          <input type="password" class="form-control" id="inputPassword3">
        </form>

            <button class="btn btr-primary" type="button" id= 'btnIngresar' onclick="iniciarSesion()">
                <a>Iniciar sesión</a>
            </button>

            <button @click="irRegistro()" class="btn btr-primary" type="button">
                <a href="">Registrarse</a>
            </button>
          
      </section>

        <h1 class="titulo">¡Gracias por acceder al sistema!</h1>    

</div>

</template>

<script>
export default {
    methods: {
        irRegistro(){
            this.$router.push('/registroadmin')
        }
    
    }
}
</script>

<style>

.titulo {

    margin-left: 50px;
    color: rgb(24, 24, 163);
    margin-top: 20px;
 
}

.form-label {

    margin-top: 15px;
    color: rgb(13, 13, 141);
}


.btn  {

    margin-top: 30px;
    margin-left: 50px;
    color: rgb(11, 45, 75);
}

.form-label {

    margin-top: 15px;
    color: rgb(13, 13, 141);
}

.form-control {

    margin-top: 15px;
}

.administrador {

   margin-left: 15px;
    margin-top: 10px;
    width: 750px;
}

</style>