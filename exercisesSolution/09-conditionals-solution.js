// 1. 

const palabra = "Qadir"
    if (palabra.includes("Qadir")) {
        console.log(palabra)
    } else {
        console.log("Ese no es mi nombre duh")
    }

// 2. 

    const user = "qramirez"
    const password = "12345"

    if (user == "qramirez" && password == "12345") {
        console.log("Has entrado a la pagina")
    } else {
        console.log("Credenciales incorrectas")
    }

// 3. 

    const num = -2

    if (num > 0) {
        console.log("El numero es positivo")
    } else if (num == 0) {
        console.log("El numero es 0")
    } else {
        console.log("El numero es negativo")
    }

// 4. 

    edad = 16
    if (edad >= 18) {
        console.log("Puedes votar")
    } else {
        falta = 18 - edad
        console.log(`Te faltan ${falta} años para votar`)
    }


// 5. 
    const mayor = "mayor"
    const menor = "menor"
    edad >= 18 ? edad = mayor : edad = menor
    console.log(edad) 


// 6. 

const month = 2

    switch(month) {
        case 1:
        console.log("Es verano")
        break

        case 2:
        console.log("Es verano")
        break

        case 3:
        console.log("Es verano")
        break

        case 4:
        console.log("Es otoño")
        break

        case 5:
        console.log("Es otoño")
        break

        case 6:
        console.log("Es otoño")
        break

        case 7:
        console.log("Es invierno")
        break

        case 8:
        console.log("Es invierno")
        break

        case 9:
        console.log("Es invierno")
        break
        
        case 10:
        console.log("Es primavera")
        break

        case 11:
        console.log("Es primavera")
        break

        case 12:
        console.log("Es primavera")
        break
}

// 7. 

    let days = ""

    switch (month){
        case 1:
        days = 31
        console.log(`Es verano y este mes tiene ${days} dias`)
        break

        case 2:
        days = 28
        console.log(`Es verano y este mes tiene ${days} dias`)
        break

        case 3:
        days = 31
        console.log(`Es verano y este mes tiene ${days} dias`)
        break

        case 4:
        days = 30
        console.log(`Es otoño y este mes tiene ${days} dias`)
        break

        case 5:
        days = 31
        console.log(`Es otoño y este mes tiene ${days} dias`)
        break

        case 6:
        days = 30
        console.log(`Es otoño y este mes tiene ${days} dias`)
        break

        case 7:
        days = 31
        console.log(`Es invierno y este mes tiene ${days} dias`)
        break

        case 8:
        days = 31
        console.log(`Es invierno y este mes tiene ${days} dias`)
        break

        case 9:
        days = 30
        console.log(`Es invierno y este mes tiene ${days} dias`)
        break
        
        case 10:
        days = 31
        console.log(`Es primavera y este mes tiene ${days} dias`)
        break

        case 11:
        days = 30
        console.log(`Es primavera y este mes tiene ${days} dias`)
        break

        case 12:
        days = 31
        console.log(`Es primavera y este mes tiene ${days} dias`)
        break
    }


// 8. 

let idioma = 2
    if (idioma <= 5 && idioma > 0) {

    switch (idioma) {
        case 1:
        console.log("Hola bro")
        break
        case 2:
        console.log("Whats up dawg")
        break
        case 3:
        console.log("Bonjour mon frère")
        break
        case 4:
        console.log("你好兄弟")
        break
        case 5:
        console.log("Olá mano")
        break
    }} else {
        console.log("Idioma no disponible")
    }

// 9. hecho




// 10. hecho