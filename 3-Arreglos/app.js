const frutas = ["manzana", "pera", "naranja", "plátano", "uva", "cereza", "kiwi", "sandía"];
const colores = {
    "manzana": "red",
    "pera": "green",
    "naranja": "orange",
    "plátano": "yellow",
    "uva": "purple",
    "cereza": "darkred",
    "kiwi": "brown",
    "sandía": "lightcoral"
};

const generarFrutas = () => {
    let frutasAleatorias = [];

    for (let i = 0; i < 15; i++) {
        let frutaRandom = frutas[Math.floor(Math.random() * frutas.length)];
        frutasAleatorias.push(frutaRandom);
    }

    const conteoFrutas = {};

    let i = 0;
    while (i < frutasAleatorias.length) {
        let fruta = frutasAleatorias[i];
        conteoFrutas[fruta] = (conteoFrutas[fruta] || 0) + 1;
        i++;
    }

    const container = document.getElementById("frutas-container");
    container.innerHTML = "";

    for (const fruta in conteoFrutas) {
        let div = document.createElement("div");
        div.className = "fruta";
        div.style.backgroundColor = colores[fruta] || "gray";
        div.textContent = `${fruta}: ${conteoFrutas[fruta]}`;
        container.appendChild(div);
    }
};

const btnGenerarFrutas = document.getElementById("generar-frutas");

btnGenerarFrutas.addEventListener("click", generarFrutas);
