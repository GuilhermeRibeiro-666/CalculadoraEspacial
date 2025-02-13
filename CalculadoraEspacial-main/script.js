function mostrarFormulario(solido) {
    const formulario = document.getElementById('formulario');
    const resultado = document.getElementById('resultado');
    const imagemAmpliada = document.getElementById('imagem_ampliada');

    let html = '';
    let imagem = '';

    if (solido === 'cilindro') {
        html = `
            <h3>Cilindro</h3>
            <input type="number" id="raio" placeholder="Raio(r) em (cm)">
            <input type="number" id="altura" placeholder="Altura(h) em (cm)">
            <button onclick="calcularCilindro()">Calcular</button>
        `;
        imagem = `<img src="Imagens/cilindro2.jpeg" alt="Cilindro Ampliado">`;
    } else if (solido === 'prisma') {
        html = `
            <h3>Prisma</h3>
            <input type="number" id="base" placeholder="Base(a) em (cm)">
            <input type="number" id="altura" placeholder="Altura(h) em (cm)">
            <input type="number" id="altura" placeholder="Comprimento em (cm)">
            <button onclick="calcularPrisma()">Calcular</button>
        `;
        imagem = `<img src="Imagens/prisma2.jpeg" alt="Prisma Ampliado">`;
    } else if (solido === 'cone') {
        html = `
            <h3>Cone</h3>
            <input type="number" id="raio" placeholder="Raio(r) em (cm)">
            <input type="number" id="altura" placeholder="Altura(h) em (cm)">
            <button onclick="calcularCone()">Calcular</button>
        `;
        imagem = `<img src="Imagens/cone2.jpeg" alt="Cone Ampliado">`;
    }

    formulario.innerHTML = html;
    formulario.style.display = 'block';
    imagemAmpliada.innerHTML = imagem;
    imagemAmpliada.style.display = 'block';
    resultado.innerHTML = `Preencha os dados do ${solido}`;
}

function calcularCilindro() {
    const raio = parseFloat(document.getElementById('raio').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(raio) || isNaN(altura)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const areaBase = Math.PI * Math.pow(raio, 2);
    const areaLateral = 2 * Math.PI * raio * altura;
    const areaTotal = (2 * areaBase + areaLateral).toFixed(2);
    const volume = (areaBase * altura).toFixed(2);

    document.getElementById('resultado').innerHTML = `
        Área Total: ${areaTotal} cm²<br>
        Volume: ${volume} cm³
    `;
}

function calcularPrisma() {
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const profundidade = parseFloat(document.getElementById('profundidade').value);

    if (isNaN(base) || isNaN(altura) || isNaN(profundidade)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const areaBase = base * altura;
    const areaLateral = 2 * (base + altura) * profundidade;
    const areaTotal = (2 * areaBase + areaLateral).toFixed(2);
    const volume = (areaBase * profundidade).toFixed(2);

    document.getElementById('resultado').innerHTML = `
        Área Total: ${areaTotal} cm²<br>
        Volume: ${volume} cm³
    `;
}

function calcularCone() {
    const raio = parseFloat(document.getElementById('raio').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(raio) || isNaN(altura)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const geratriz = Math.sqrt(Math.pow(raio, 2) + Math.pow(altura, 2));
    const areaBase = Math.PI * Math.pow(raio, 2);
    const areaLateral = Math.PI * raio * geratriz;
    const areaTotal = (areaBase + areaLateral).toFixed(2);
    const volume = (areaBase * altura / 3).toFixed(2);

    document.getElementById('resultado').innerHTML = `
        Área Total: ${areaTotal} cm²<br>
        Volume: ${volume} cm³
    `;
}