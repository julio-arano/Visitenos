let cad=` 
<div>
        <nav>    <!--  nav a las otras paginas -->
            <a href="index.html">Home</a>
            <a href="./hospedajes.html">¿Dónde dormir?</a>
            <a href="./gastronomia.html">¿Dónde comer?</a>
            <a href="./turismo.html">¿Qué hacer?</a>
            <a href="./fiestapop.html">Fiesta del Pastel!</a>
            <a href="./contactos.html">Contacto</a>
            <a href="./mapa.html">¿Cómo llegar?</a>
            <a href="./condiciones.html">Condiciones TPO</a>
            <a href="https://www.carmendeareco.gob.ar/turismo/">Web oficial<img src="./img/logo_Carmen-de-Areco.png" alt=""width="50" height=""></a>     
        </nav>
        </div> 
        <section class="container"> <!--Cosito que marea-->
      <div id="carousel" > 
        <img src="./img/logo_Carmen-de-Areco.png" alt="" style="width:100%;height:100%;"> 
        <figure><h1 class="titulo">VISITE</h1></figure>
        <figure><h1 class="titulo">GOUIN</h1></figure>
        <figure><h1 class="titulo">VISITE</h1></figure>
        <figure><h1 class="titulo">GOUIN</h1></figure>
        <figure><h1 class="titulo">VISITE</h1></figure>
        <figure><h1 class="titulo">GOUIN</h1></figure>
        <figure><h1 class="titulo">VISITE</h1></figure>
        <figure><h1 class="titulo">GOUIN</h1></figure>
        
      </div>
    </section>
     ` 
document.querySelector("header").innerHTML=cad
cad=`

<div class="col-12 col-s-12 menu" >
<p> Proyecto CAC 23537 - Blumberg/Dalmao/Arano - 2023</p>
</div>
<br>
<div class="redes">
  <a href="https://web.whatsapp.com/">
    <img id="redes" src="./img/whatsapp.png" alt="">
  </a>
  <a href="https://www.facebook.com/turismocarmendeareco">
    <img id="redes" src="./img/facebook.png" alt="">
  </a>
  <a href="https://www.instagram.com/carmendearecoturismo/">
    <img id="redes" src="./img/instagram.png" alt="">
  </a>
</div>
` 
document.querySelector("footer").innerHTML=cad



const { createApp } = Vue


createApp({
    data() {
        return {
            datos: [],
            url: "https://api.coindesk.com/v1/bpi/currentprice.json",
            
            error: false
        }
    },
    methods: {
        fetchData(url) {
            fetch(this.url)
                .then(response => response.json())
                .then(data => {console.log(data)
                    this.datos=data
                });

        }
    },
    created() {
        this.fetchData(this.url)                                                         
       }
   
}).mount('#app')
