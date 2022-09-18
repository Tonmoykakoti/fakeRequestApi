const container = document.querySelector('.container')
const request = new XMLHttpRequest()

request.open('GET', 'https://restcountries.com/v2/name/india')
request.send()

request.addEventListener('load', function () {
    const [,data] = JSON.parse(request.responseText)
    console.log(data)
    const htmlData = `
    <div class="card">
    <img src="${data.flag}" alt="">
    <h2>${data.name}</h2>
    <h3>${data.capital}</h3>
    <hr>
    </div>
    `
    container.insertAdjacentHTML('afterbegin',htmlData)
})

