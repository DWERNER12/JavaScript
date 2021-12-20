function converter1(){
    var medida = document.getElementById('txtmedida')
    var valor = Number(medida.value)
    var res = document.querySelector('div#res')
    var funi = document.querySelectorAll("input[type='radio']")
    var uni = ''
    
    if (medida.value == 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else { 
        if (funi[0].checked){
            var km = valor / 1000
            var cm = valor * 100
            var milha = valor / 1609 
            var mm = valor * 1000
            var jarda = valor * 1.094
            
            pol = valor * 39.37
            uni = 'Metros(m)'
            res.innerHTML= `${valor} ${uni} é igual a <br><br>${mm} Milimetro(mm)<br>${cm} Centímetros(cm)
            <br>${km} Quilômetros(km)<br>${milha} Milha(mi)<br>${jarda} Jarda(yd)<br>${pol} Polegadas(in)`
        }else if (funi[1].checked){
            var m = valor / 1000
            var cm = valor / 10
            var micro = valor * 1000
            var pol = valor / 25.4
            uni = 'Milimetro(mm)'
            res.innerHTML = `${valor} ${uni} é igual a <br><br>${m} Metros(m)<br>${cm} Centímetros(cm)
            <br>${micro} Micrômetro(µm)<br>${pol} Polegadas(in)`
        } else if (funi[2].checked) {
            cm = valor * 100000
            m = valor * 1000
            milha = valor / 1.609
            jarda = valor * 1094
            pol = valor * 39370
            uni = 'Quilômetros(km)'
            res.innerHTML= `${valor} ${uni} é igual a <br><br>${cm} Centímetros(cm)<br>${m} Metros(m)
            <br>${milha} Milha(mi)<br>${jarda} Jarda(yd)<br>${pol} Polegadas(in)`
        }else {
            var micro = valor * 10000
            var m = valor / 100
            var pol = valor / 2.54 
            var mm = valor * 10
            uni = 'Centímetro(m)'
            res.innerHTML= `${valor} ${uni} é igual a <br><br>${m} Metros(m)<br>${mm} Milimetro(mm)
            <br>${micro} Micrômetro(µm)<br>${pol} Polegadas(in)`
        }
       
    }
    
}