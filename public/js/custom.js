'use strict'

let form = document.getElementById('request-form')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    let xhr = new XMLHttpRequest()
    let url = document.getElementById('url').value
    let apiUrl = '/api/instagram'

    xhr.open('POST', apiUrl, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(`url=${url}`);
    xhr.onloadend = function () {
        if (this.readyState == 4 && this.status == 200 || this.responseText == "") {
            let response = JSON.parse(this.responseText)
            let result = document.getElementById('result')

            let text = `<ul class="list-outside md:list-inside">`
            let i = 1
            for (let key in response.data.url.url_list) {
                text += `<li class="mb-5">Page ${i} : <a href="${response.data.url.url_list[key]}" target="_blank" class="bg-blue-400 hover:bg-blue-500 py-2 px-4 text-white rounded-md">Download</a></li>`
                i++
            }
            text += `</ul>`
            result.innerHTML = text
        }
    }
})