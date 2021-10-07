
let i = 1; //___inicio

do {

    if ( i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} FIZZBUZZ!!!`);
    } else if ( i % 3 === 0){
        console.log(`${i} Fizz`);
    } else if ( i % 5 === 0) {
        console.log(`${i} Buzz`);
    }

    i++; //___incrementto 
} while ( i < 101) //___condición

// let i = 1; //___inicio

// do {

//     if ( i % 2 === 0 ) {
//         console.log(`${i} par`);
//     } else {
//         console.log(`${i} impar`);    
//     }

//     i++; //___incrementto 
// } while ( i < 101) //___condición
    
