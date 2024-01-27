const getData = url =>
    new Promise((resolve, reject) =>
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    )
let button = document.querySelector('.goods_h1')
let goods_container = document.querySelector('.goods_container')

button.addEventListener('click', () => {
    getData('http://localhost:3000/products')
        .then(data => {
            data.forEach(el => {
                goods_container.insertAdjacentHTML(
                    `beforeend`,
                    `
                    <div class="block${el.id}">
                    <p class = "text1">${el.name}</p>
                    <p class = "text2">стоимость: ${el.price} рублей</p>
                    <p class = "text3">количество: ${el.quantity}</p>
                    <img class="img" src="${el.img}">
                    </div>
                `
                )
            })
        })
        .catch(error => console.error(error))
})