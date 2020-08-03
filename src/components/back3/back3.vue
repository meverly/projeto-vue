<template>
    <div id="back3">
    <div class="imagemfundo">
        <img src="../../assets/book.png" style="transform: rotate(-41.95deg);">
        <img src="../../assets/pencill.png">
        
    </div>    
    <div class="titulo" style="color: #4541FF;" >DEPOIMENTOS</div>
    <div class="linha" style="background-color:#EAE1E1 ;" > </div>
    <div class="depoimento">
        <img src="../../assets/depoimento1.jpg">
        <p style="margin-top:auto;color: black; font-size:23px; width: 600px;justify-content: center;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehendrit in voluptate vellit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="linha" > </div>
    <div class="depoimento">
        <p style="margin-top:auto;color: black; font-size:23px; width: 600px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehendrit in voluptate vellit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <img src="../../assets/depoimento2.jpg">
    </div>
    
    <div class="linha" > </div>
    <div class="depoimento">
        <img src="../../assets/depoimento3.jpg">
        <p style="margin-top:auto;color: black; font-size:23px; width: 600px;justify-content: center;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehendrit in voluptate vellit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="linha" > </div>
    <div class="depoimento">
        <p style="margin-top:auto;color: black; font-size:23px; width: 600px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehendrit in voluptate vellit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <img src="../../assets/depoimento4.jpg">
    </div>

</div>
</template>
<script>
export default {
    
}
</script>
<style>
#back3 {
    position: absolute;
    width:100%;
    height:200vh;
    top: 1520px;
    background: #EAE1E1;
    margin: 0%;
}
.imagemfundo{
    position: absolute;
width: 450px;
height: 150vh;
top:20vh;
left:40%;
display: flex;
flex-direction: column;
justify-content: center;
justify-content: space-around;
align-content: center;
opacity: 0.1;
}
.titulo{
    color: white;
    width: 10%;
    height:100px;
    margin-top: 20vh;
    display: flex;
    justify-content: center;
    font-size: 68px;
    font-family: montserrat;
}
.linha{

    width: 100%;
    height:5px;
    display: flex;
    justify-content: center;
    background-color: #4541FF;
    
}
.depoimento{
    width: 1000px;
    height:240px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
}
p{
    width: 80%;
    margin-top: 10vh;
    color: white;
    font-size: 30px;
    font-family: montserrat;
    display: flex;
    justify-content: center;
}
</style>