// 1. 

    animales = ["perro", "gato", "leon", "tigre", "gorilla"]

    console.log(animales)
// 2. 

    animales.push("zorro")
    animales.unshift("Jirafa")
    console.log(animales)

// 3. 

    animales.splice(2, 1)
    console.log(animales)

// 4. 

    let libros = new Set (["Libro 1", "Libro 2", "Libro 3", "Libro 4", "Libro 5"])
    console.log(libros)

// 5. 

    libros.add("Libro 2")
    libros.add("Libro 6")
    console.log(libros)

// 6. 

    console.log(libros.delete("Libro 3"))
    console.log(libros)


// 7. 

const mesesAño = new Map ([
    ["Enero", 1],
    ["Febrero", 2],
    ["Marzo", 3],
    ["Abril", 4],
    ["Mayo", 5],
    ["Junio", 6],
    ["Julio", 7],
    ["Agosto", 8], 
    ["Septiembre", 9],
    ["Octubre", 10],
    ["Noviembre", 11],
    ["Diciembre", 12]
])

console.log(mesesAño)

// 8. 

    console.log(mesesAño.has(5))


// 9. 


// 10. 