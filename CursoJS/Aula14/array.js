let num = [5,2,8,9,3]

console.log(`Nosso vetor é o ${num}`)// mostra o conteudo do array
console.log(`O vetor tem ${num.length} posições`)//numero de elementos do array
console.log(num[0])//mostra o conteudo na posição informada dentro das chaves =>[]
num.sort()//para colovar o vetor em ordem
num.push(1)//para add uma variavel e criar um elemento no array
console.log(num)

let pos = num.indexOf(6)
if(pos == -1) {
    console.log(`o valor não foi encontrado!`)
} else {
    console.log(`o valor está na posição ${pos}`)
}

/*let valores = [8,1,7,4,2,9]

//console.log(valores)mostras na tela sem formatação

 forma burra de mostras valor
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])


for(let pos=0; pos<valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} forma tradicional de mostras elementos 


for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}//forma simplificada de mostrar elemento*/

