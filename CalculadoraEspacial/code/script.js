let raio;
let altura;


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