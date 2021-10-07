
//___Arrow Functions___

const aprendiendo = function (tecnologia, tecnologia2) {
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}
aprendiendo('JS', 'node.js');

/* ============================================================ */

const aprendiendo2 = tecnologia => `Aprendiendo ${tecnologia}` ;
console.log(aprendiendo2('JS'));

const aprendiendo3 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} & ${tecnologia2}`;
console.log (aprendiendo3 ('JS', 'node.js'));

