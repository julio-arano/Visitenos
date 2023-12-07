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
