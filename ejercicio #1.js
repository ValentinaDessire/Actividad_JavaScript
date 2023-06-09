const pesos = [44, 37, 70, 40, 58, 39, 74, 46, 38, 60, 68];
let menosDe40Kg = 0;
let entre40y50Kg = 0;
let entre50y60Kg = 0;
let masDe60Kg = 0;

pesos.forEach(peso => {
    if (peso < 40) {
        menosDe40Kg++;
    } else if (peso >= 40 && peso < 50) {
        entre40y50Kg++;
    } else if (peso >= 50 && peso < 60) {
        entre50y60Kg++;
    } else {
        masDe60Kg++;
    }
});

console.log(`Alumnos con un peso menor a 40 kg: ${menosDe40Kg}`);
console.log(`Alumnos con un peso entre 40 y 50 kg: ${entre40y50Kg}`);
console.log(`Alumnos con un peso entre 50 y 60 kg: ${entre50y60Kg}`);
console.log(`Alumnos con un peso mayor a 60 kg: ${masDe60Kg}`);