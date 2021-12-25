let num = document.getElementById('fnum')
let lista = document.querySelector('select#flista')
let fim = document.querySelector('div#fim') 
let valores = []

function isNumero(n) {
    if (Number(n) >=1 && Number(n)<=100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        fim.innerHTML=''
        
    } else {
        window.alert('[ERRO] Digite um número entre 1 e 100 ou \njá encontrado na lista.')
    }

    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0 
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            media = soma/total
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }

        fim.innerHTML = ''
        fim.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        fim.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        fim.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        fim.innerHTML += `<p>A soma dos valores cadastrados é igual ${soma}.</p>`
        fim.innerHTML += `<p>A media é ${media}.</p>`
    }
}

