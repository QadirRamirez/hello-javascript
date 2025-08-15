// 1. 

    function suma(a, b) {
        let x = a + b
        console.log(x)
    }

    suma(20, 50)

// 2.
function numeroMayor(array) {
    let mayor = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }
    return mayor;
}

const numeros = [50, 60, 10, 25, 75, 74, 76, 25, 85, 45, 96, 71, 20, 80, 85, 96, 95, 85];
console.log(numeroMayor(numeros));



// 3.

function totalVocals(string) {
    let vocals = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let count = 0

    for (i = 0; i < string.length; i++) {
        if (vocals.includes(string[i])) {
            count++
        } else {
        continue
    }
    
    }
    console.log(count)

} 
totalVocals("Qadir Ramirez")

// 4.

    function myArray(array = []) {
        let newArray = []
        for (i = 0; i < array.length; i++) {
            newArray.push(array[i].toUpperCase())

        }
        console.log(newArray)
    }

    myArray(["Qadir", "Ricardo", "Ramirez", "Teran"])



// 5.

    


// 6.


// 7.


// 8.


// 9.


// 10.