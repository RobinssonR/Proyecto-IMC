<template>
    <header>
        <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
            <h1>SISTEMA DE CONTROL IMC</h1>
        </nav>
        <div class="accederSistema">
            <button class="botonAcceso" type="button">
                <a href="/login">Acceder al sistema IMC</a>
            </button>
        </div>
    </header>
</template>

<style>
    body {
            max-width: 1400px;
            min-width: 375px;
            margin-right: auto;
            margin-left: auto;
            margin-top: 1;
            margin-bottom: 0;
            color: #1a116e;
            background-color: rgb(192, 210, 241);
        }
        
    .navbar{
          justify-content: center;
        }

    .header-section {
            margin-bottom: 100px;
        }

    .header-container{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            text-align: center;
    }

    .accederSistema{
            text-align: right;
        }
        
    .botonAcceso{
            color:bisque;
            background-color:aquamarine;
            margin-right: 10%;
        }
</style>