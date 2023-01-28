let cuadros = [ 
    {id: 1, nombre: "A", categoria:"zz", precio:10, img:"./imagenes/gamadenoche.png"},
    {id: 2, nombre: "B", categoria:"zz", precio:15, img:"./imagenes/gamadenoche2.png"},
    {id: 3, nombre: "C", categoria:"xx", precio:18, img:"./imagenes/gamadenoche3.png"},
    {id: 4, nombre: "D", categoria:"xx", precio:22, img:"./imagenes/gamadenoche4.png"},
    {id: 5, nombre: "E", categoria:"xx", precio:22, img:"./imagenes/gamadenoche5.jpg"},
    {id: 6, nombre: "F", categoria:"xx", precio:22, img:"./imagenes/gamadenoche6.png"},
    {id: 6, nombre: "G", categoria:"cc", precio:13, img:"./imagenes/copia.png"},
    {id: 7, nombre: "H", categoria:"vv", precio:15, img:"./imagenes/symbioticself.png"},
    {id: 8, nombre: "I", categoria:"vv", precio:18, img:"./imagenes/carrousel2-min.png"},
    {id: 9, nombre: "J", categoria:"cc", precio:10, img:"./imagenes/mg-min.png"}
]

let contenedor = document.getElementById("contenedor")





renderizar(cuadros)
// functions



// Renderizar

function renderizar(array) {
    contenedor.innerHTML = ""
    for (const cuadro of array) {
        let tarjetaBody = document.createElement("div")
        tarjetaBody.className = "col-lg-4"
        tarjetaBody.innerHTML = `
            <div class="card">
                <div class="card-img">
                    <img src="${cuadro.img}" alt="Card image cap">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${cuadro.nombre}</h5>
                    <h6 class= "precio"><strong>Price: $ ${cuadro.precio.toFixed(2)}</strong></h6><hr>
                    <p class="card-text">Some quick example text</p>
                    <a id ="${cuadro.id}" href="#" class="btn btn-primary">Comprar</a>
                </div>
            </div>
            `
        contenedor.append(tarjetaBody)
    }
}