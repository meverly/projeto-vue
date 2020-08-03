<template>
    <div id="back5">
    <div class="polygon1">
        <div class="contato">
            <div>
                <h3>Entre em contato</h3>
                <div><br></div>
                <div class="simbolo">
                
                    <img width="24px" height="24px" src="../../assets/flag1.png">
                    R. Benfica,455 - Madalena, Recife - PE<br>CEP: 50720-001
                </div>
                <div class="simbolo">
                    <img width="24px" height="24px" src="../../assets/email.png">
                    colegio@polijr.com.br
                </div>
                <div class="simbolo">
                    <img width="24px" height="24px" src="../../assets/telefone.png">
                    81 3344-5566
                </div>
                <div class="simbolo">
                    <img width="24px" height="24px" src="../../assets/whatsapp.png">
                    81 996158406
                </div>
            </div>
            <div>
                <h3>Horário de funcionamento</h3>
                <div><br></div>
                <div class="simbolo" style="width: 90%;">
                    <img width="24px" height="24px" src="../../assets/relogio.png">
                    Segunda a Sábado - 6:00 ás 21:00
                </div>
            </div>
            <div>
                <div class="maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.4115498285773!2d-34.90554918541778!3d-8.059434982755478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18ded1bc6309%3A0x4d4114cf475dc1bb!2sPoli%20J%C3%BAnior%20Engenharia!5e0!3m2!1spt-BR!2sbr!4v1595306332251!5m2!1spt-BR!2sbr" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
                <div class="redesSociais" >
                    <h4>Clique nos ícones para acessá-los</h4>
                   <a href="https://www.youtube.com/channel/UCpTjdcJQiYu1aDlVhENPfpQ"><img width="60px" id="icone" height="60px" src="../../assets/youtube.png"></a> 
                   <a href="https://pt-br.facebook.com/PoliJuniorEngenharia/"><img width="60px" id="icone" height="60px" src="../../assets/facebook.png"></a>
                   <a href="https://twitter.com/Poli_Jr"><img width="60px" id="icone" height="60px" src="../../assets/twitter.png"></a>
                   <a href="https://www.instagram.com/polijunioreng/?hl=pt-br"><img width="60px" id="icone" height="60px" src="../../assets/instagram.png"></a>
                   
                   
                    
                </div>
            </div>
                
        </div>
        <div class="linha2"></div>
        <div class="footer">
            
            <div  style="margin-left: 0px; margin-top:40px"><img style="margin-top: 0px; float: left;" width="22px"  height="18px" src="../../assets/direitos1.png">Todos os direitor reservados - Colégio Poli Jr</div> 
            <img style="margin-left: 500px; margin-top: 20px;" width="200px"  height="60px" src="../../assets/polijunior.jpg">
        </div>

    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style>
#back5 {
    position: absolute;
    width:100%;
    height:100vh;
    top: 3560px;
    background: rgba(69, 65, 255, 0.75);
    margin: 0%;
}
.polygon1{
    position: absolute;
width: 100%;
height: 100vh;
top: 0px;
border-top-left-radius: 70% ;
background:#EAE1E1;
}
.contato{
    width: 90%;
    height:50vh;
    margin-top: 15%;
    display:flex;
    flex-direction: row;
}
h3{
    font-size: 30px;
    color:black;
    text-align:center;
}
.simbolo{
    top:10px;
    width: 80%;
    font-size: 20px;
    color:rgb(39, 34, 34,0.5);
}
.redesSociais{
    margin-top: 10px;
    width: 400px;
    height: 65px;
    display:flex;
    flex-direction: row;
    align-items: space-around;
    justify-content: space-between;
}
.linha2{
    width: 75%;
    height: 2px;
    background-color: grey;
    margin-top: 20px;
}
.footer{
    width: 75%;
    height: 50px;
    font-size: 20px;
    color: black;
    font-style: normal;
    display:flex;
    flex-direction: row;
    align-content: space-between;

}
</style>