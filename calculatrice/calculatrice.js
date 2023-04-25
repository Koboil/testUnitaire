function add(somme, number ){
 return somme += number;
}
function sub(somme, number){
 return somme -= number;
}
function mult(somme, number){
 return somme * number; 
}
function div(somme, number){
    if (number === 0) {
        throw new Error('Cannot divide by zero');
    }
 return somme / number;
}
function avg(somme){
    let sum = somme.reduce((a, b) => a + b, 0);
    return sum / somme.length || 0;
}

module.exports = { add, sub, mult, div, avg };