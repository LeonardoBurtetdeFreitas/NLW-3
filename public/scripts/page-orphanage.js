const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//Create map
const map = L.map('mapid', options).setView([-27.2186226, -49.6436009], 15)

//Create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//Create and add marker 
L
    .marker([-27.2186226, -49.6436009], { icon })
    .addTo(map)

/* Image gallary */

function selectImage(event) {
    const button = event.currentTarget

    // Remover todas as classe .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }


    //Selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //Atualizar o container de images
    imageContainer.src = image.src
        // Adicionar a classe .active para este botao
    button.classList.add('active')
}