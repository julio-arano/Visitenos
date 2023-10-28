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
` 
document.querySelector("header").innerHTML=cad
cad=`
<div class="col-12 col-s-12 menu" >
       <p> Proyecto CAC 23537 - Blumberg/Dalmao/Arano - 2023</p>
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
