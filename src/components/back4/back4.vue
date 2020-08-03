<template>
  <div id="back4">
    <div class="polygon">
      <div class="chapeufundo">
        <img src="../../assets/chapeu2.png" style="top: 0%;" />
      </div>
      <div class="titulo" style="color: #4541FF;">RESULTADOS</div>
      <div class="fundotexto">
        <h2 style="color: rgba(69, 65, 255);">1º LUGAR NO ENEM ENTRE OS COLÉGIOS DE TODO O BRASIL</h2>
        <h2 style="color: white; ">10 PRIMEIROS LUGARES DO SSA</h2>
        <h2 style="color:black">APROVAÇÕES EM FACULDADES DE TODO O PAÍS</h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
#back4 {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 2800px;
  background: rgba(69, 65, 255, 0.75);
  margin: 0%;
}
.polygon {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0px;
  border-bottom-right-radius: 100%;
  background: #eae1e1;
}
.chapeufundo {
  position: absolute;
  width: 450px;
  height: 60vh;
  top: 45vh;
  left: 37%;
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
.fundotexto{
    
    width:80%;
    height:62vh;
    border:solid 1px;
    border-color: rgb(39, 34, 34,0.3);
    border-radius:50px;
    background-color: rgb(39, 34, 34,0.3);
    
}
h2{
   
    
    font-size: 70PX;
    height: auto;
    margin-top: 10px;
    margin-left: 0px;
    font-family: montserrat;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    

}
</style>