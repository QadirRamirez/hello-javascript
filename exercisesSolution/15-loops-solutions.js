// 1.

    for (i = 1; i <= 20; i++) {
        console.log(`numero: ${i}`)
    }

// 2.

    // for (x = 1; x <= 100; x++) {
    //     for (y = 1; y <= 100; y++) {
    //         z = x + y
    //         console.log(z)
    //     }

    // }

// 3.

    for (x = 1; x <= 50; x++) {
        let z = x % 2
        if (z == 0) {
            console.log(`${x}`)
        } else {
            continue
        }
    }

// 4.

    const nombres = ["Qadir", "Ricardo", "Jose", "Luis", "Kyle"]

    for (i = 0; i < nombres.length; i++) {
        console.log(`Nombre: ${nombres[i]}`)
    }

// 5.
    const nombre = "Qadir"
    const vocales = "aeiouAEIOU"
    let contador = 0

    for (i = 0; i < nombre.length; i++) {
        if (vocales.includes(nombre[i])) {
            contador++

        }
    }
    console.log(contador)

// 6.

const numbers = [1, 2, 3, 4, 5];
let producto = 1;

for (let i = 0; i < numbers.length; i++) {
    producto *= numbers[i];
}

console.log(producto); //


// 7.

    for (i = 0; i <= 10; i++) {
        x = 5 * i
        console.log(x)
    }

// 8.

const texto = "Qadir";
let invertida = "";

for (i = texto.length - 1; i >= 0; i--) {
    invertida += texto[i];
}

console.log(invertida);


// 9.

let a = 0; // primer número
let b = 1; // segundo número

for (let i = 1; i <= 10; i++) {
    console.log(a); // muestra el número actual

    let temp = a + b; // suma de los dos anteriores
    a = b; // el segundo pasa a ser el primero
    b = temp; // la suma pasa a ser el segundo
}

// 10. 

const numbers1 = [1, 50, 10, 20, 8, 6, 69, 11, 58]

for (i = 0; i < numbers1.length; i++ ) {
    if (numbers1[i] > 10) {
        const nArray = [numbers1[i]]
        console.log(nArray)
    } else {
        continue
    }
}
