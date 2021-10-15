<template>

<div>

    <h1 class= "titulo"> Consultar Historial IMC Pacientes </h1>

    <select class="form-select mb-3 w-50 mx-3" aria-label="Default select example">
                    <option selected>Tipo de documento de identidad</option>
                    <option value="1">Tarjeta de identidad</option>
                    <option value="2">Cedula de ciudadania</option>
                    <option value="3">Cedula de extranjeria</option>

    </select>
            <span class="input-group-text" id="inputGroup-sizing-default">Número de identificación</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="sin puntos ni comas" width="20%">
            <button class="botonConsulta" type="button">Consultar Informacion</button>
                
</div>
            
</template>

<style>
.botonConsulta {
            color:bisque;
            background-color:rgb(4, 4, 116);
            margin-top: 20px;
            margin-left: 20px;
        }

.areaBoton {
            text-align: left;
            margin-left: 5;
        }

.input-group-text {

    margin-left: 15px;
    width: 300px;
}

.form-control {
    margin-left: 15px;
    width: 700px;
}

.titulo {

    margin-left: 15px;
    color: rgb(24, 24, 163);
    margin-top: 20px;
}
</style>