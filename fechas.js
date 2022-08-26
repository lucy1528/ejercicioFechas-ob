let fechaDeHoy = new Date()
let fechaDeNacimiento = new Date(1985, 05, 28)
let fechaMasTarde = fechaDeHoy.getTime() > fechaDeNacimiento.getTime()
let diaDeNacimiento = fechaDeNacimiento.getDate()
let mesDeNacimiento = fechaDeNacimiento.getMonth()+1
let anyoDeNacimiento = fechaDeNacimiento.getFullYear()
