function gerar() {
    let num = document.getElementById('txtnum')
    let valor = Number(num.value)
    let tab = document.querySelector('select#seltab')
    if(num.value.length == 0){
      window.alert('[ERRO]')
    } else {
        tab.innerHTML = ''
        for(let c=0; c<=10; c++){
            let item = document.createElement('option')
            let t=c*valor
            item.text = `${c} x ${valor} = ${t}`
            tab.appendChild(item)
            
      }
       
    }
        
}