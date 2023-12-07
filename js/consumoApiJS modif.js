
fetch('https://https://jarano.pythonanywhere.com/persona/(1)')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let cad = `
                    <p>Nombre:${data.persona[0].nombre} ${data.persona[0].apellido}</p>
                    <p>Pais:${data.persona[0].pais}</p> <p>Mensaje: Me encantó, Volveré pronto</p>
                    <img src="${data.persona[0].imagen}" alt="${data.persona[0].nombre}">
                   
                    `
        document.querySelector("main").innerHTML = cad

    });
   
