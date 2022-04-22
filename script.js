fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(response=>{
    return response.json()
}).then(body=>{
    document.getElementById('code').innerHTML = body.USDBRL.code
    document.getElementById('codein').innerHTML = body.USDBRL.codein
    document.getElementById('name').innerHTML = body.USDBRL.name
    document.getElementById('pctChange').innerHTML = body.USDBRL.pctChange

})

