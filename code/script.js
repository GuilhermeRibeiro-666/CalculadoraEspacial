let raio;
let altura;
let base;


function calcular_volume_cilindro(event){
    event.preventDefault();

    raio = parseFloat(document.getElementById("raio").value);
    altura = parseFloat(document.getElementById("altura").value);

    let volume_cilindro = (Math.PI * Math.pow(raio, 2) * altura).toFixed(2); 

    document.getElementById("volume_cilindro").innerHTML = `Volume: ${volume_cilindro} cm³`;
}

function calcular_volume_cone(event){
    event.preventDefault();

    raio = parseFloat(document.getElementById("raio").value);
    altura = parseFloat(document.getElementById("altura").value);

    let volume_cone = (Math.PI * Math.pow(raio, 2) * altura / 3).toFixed(2); 

    document.getElementById("volume_cone").innerHTML = `Volume: ${volume_cone} cm³`;
}

function calcular_volume_prisma(event) {
    event.preventDefault();

    let base = parseFloat(document.getElementById("base").value);
    let altura_triangulo = parseFloat(document.getElementById("altura").value);
    let altura_prisma = parseFloat(document.getElementById("altura_prisma").value);

    let volume_prisma = ((base * altura_triangulo) / 2 * altura_prisma).toFixed(2); 

    document.getElementById("volume_prisma").innerHTML = `Volume: ${volume_prisma} cm³`;
}