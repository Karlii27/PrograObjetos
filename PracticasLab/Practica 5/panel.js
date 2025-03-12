let user= true
let cuenta= true
let estado= false

if(!user){
    console.log("El usuario no está registrado")
}else if (!cuenta) {
    console.log("El usuario no tiene los permisos de admin")
} else if(!estado) {
        console.log("La cuenta ha sido suspendida")
}else{
    console.log("Entrando al panel de servicio")
}