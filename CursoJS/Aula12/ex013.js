var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
console.log(`Agora é exatamente ${hora}:${minutos} horas`)
if ( hora >= 5 && hora <12) {
    console.log('Bom dia!')
} else if (hora>= 12 && hora <= 18) {
    console.log('Boa Tarde!')
}else if (hora > 18 && hora <24) {
    console.log('Boa Noite!')
} else {
    console.log('Boa Madrugada!')
}