function contar() {
    let inicio = document.getElementById('txtin')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtp')
    let res = document.querySelector('div#res')
    let aviso = document.querySelector('p#aviso')
    

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
             aviso.innerHTML = 'Impossível contar!'
    }else{
        res.innerHTML= 'Cantando: <br>'
        let ni = Number(inicio.value)
        let nf = Number(fim.value)  
        let np = Number(passo.value)
        if(np <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            np = 1
        }    
        if(ni < nf){
            //contagem crescente
            for(let c=ni; c<=nf; c+=np){
                res.innerHTML += ` ${c} \u{1F449}`
            }
                
        } else {
            // contagem regressiva
            for(let c=ni; c>=nf; c-=np){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
            
    }
               
}