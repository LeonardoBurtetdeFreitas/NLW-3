//Create map
const map = L.map('mapid').setView([-27.2186226, -49.6436009], 15)

//Create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],

})

let marker;
//create and add marker
map.on('click', (event) => {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)
        //Add icon layer
    marker = L.marker([lat, lng], { icon })
        .addTo(map)
})

//adicionar o campo de fotos
function addPhotoField() {
    //Pegar o container de fotos #images
    const container = document.querySelector('#images')
        //pegar o container para duplicar .new-images
    const fieldsContainer = document.querySelectorAll('.new-upload')
        //realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
        //verificar se o campo esta vazio, se sim, nao adicionar ao container de images
    const input = newFieldContainer.children[0]

    if (input.value == "") {
        return
    }

    //limpar o campo antes de adcionar ao container de imagens
    input.value = ""

    //adicionar o lcone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length < 2) {
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //Deletar o campo
    span.parentNode.remove()
}

// select yes or no
function toggleSelect(event) {

    //retirar a class .active dos botoes
    document.querySelectorAll('.button-select button')
        .forEach(button => button.classList.remove('active'))

    //colocar a class .active
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o meu input hiddeen com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
        //verificar se sim ou nao
    input.value = button.dataset.value
}