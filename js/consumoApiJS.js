
fetch('https://randomuser.me/api')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let cad = `
                    <p>Nombre:${data.results[0].name.title} ${data.results[0].name.first}, ${data.results[0].name.last}</p>
                    <p>Pais:${data.results[0].location.country}</p> <p>Mensaje: Me encantó, Volveré pronto</p>
                    <img src="${data.results[0].picture.large}" alt="${data.results[0].name.last}">
                   
                    `
        document.querySelector("main").innerHTML = cad

    });
   
