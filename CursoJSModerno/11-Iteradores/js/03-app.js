
//___El reto del fizz/buzz___

//___Si es múltiplo de 3 => fizz
//___Si es múltiplo de 5 => buzz
//___Si es múltiplo de 3 y 5  => fizzbuzz


for (let i = 1; i < 101; i++) {
    if (i % 15 === 0) {
        console.log(`${i} FIZZBUZZ`)
    } else if ( i % 3 === 0) {
        console.log(`${i} fizz`)
    } else if ( i % 5 === 0) {
        console.log(`${i} buzz`)
    }
}
