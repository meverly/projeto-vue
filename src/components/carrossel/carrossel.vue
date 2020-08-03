<template>
     <div class="inteira">
       
        <div class="contencao">
            <div id="imageBg"></div>
        </div>
        <ol id="botoes"></ol>
        <h1 style="font-size: 90px; margin-top: -70vh; margin-left: 70px;">FAÇA JÁ SUA<br>MATRÍCULA!</h1>

    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.inteira{
    width: 100%;
    height:100vh;
}
.contencao{
    width:100%;
    height:100vh;
    
    overflow:hidden;
    background-color: black;
}
#imageBg{
     width:100%;
    height:100vh;
    transition: 1s;
    background-size: cover;
}
ol{
    list-style:none;
    width: 40px;
    margin-top: -25px;
    display: flex;   
}
ol li{
    background:white;
    width: 25px;
    height: 15px;
    
    border-radius: 100%;
    cursor: pointer;
}
</style>