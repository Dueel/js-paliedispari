// // RAGIONAMENTO 1 ///////////////////////////////////////////////////////////

// var firstWord = 'anna';
// var secondWord = '';

// for (i = firstWord.length - 1; i >= 0; i--) {
    
//     var secondWord += firstWord[i];
// }

// console.log(secondWord);

// if (secondWord == firstWord){
//     console.log('La parola é palindroma');
// } else {
//     console.log('La parola NON é palindroma');
// }

function primoEs(firstWord){

    var secondWord = '';

    for (i = firstWord.length - 1; i >= 0; i--) {
    
        secondWord += firstWord[i];
    }
    
    console.log(secondWord);
    
    if (secondWord == firstWord){
        console.log('La parola é palindroma');

    } else {
        console.log('La parola NON é palindroma');

    }

}


// // RAGIONAMENTO 2 ///////////////////////////////////////////////////////////


// var scelta = prompt('pari o dispari?')
// var numUser = parseInt(prompt('Scegli un numero da 1 a 5'));
// var numPc = Math.floor(Math.random() * 5 + 1);
// var somma = numUser + numPc;

// console.log(numUser, numPc, somma);

// if (somma % 2 == 0 && scelta == 'pari' || somma % 2 != 0 && scelta == 'dispari'){
//     console.log('Hai vinto!');

// } else {
//     console.log('Hai perso');

// }

function secondoEs(scelta, numUser){

    var numPc = Math.floor(Math.random() * 5 + 1);
    var somma = numUser + numPc;
    console.log('Hai scelto:' + scelta,
                'Il tuo numero:' + numUser,
                'Il numero del pc:' + numPc,
                'Totale:' + somma);


    if ((somma % 2 == 0 && scelta == 'pari') || (somma % 2 != 0 && scelta == 'dispari')){
        console.log('Hai vinto!');
    
    } else {
        console.log('Hai perso');
    
    }
}



// primoEs(prompt('Inserisci una parola'));

secondoEs((prompt('pari o dispari?')), parseInt(prompt('Scegli un numero da 1 a 5')));
