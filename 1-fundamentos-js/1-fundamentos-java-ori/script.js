const codigo = document.getElementById("codigo");
const ejecutar = document.getElementById("ejecutar");
const resultado = document.getElementById("resultado");

ejecutar.addEventListener("click", () => {
    try {
        const code = codigo.value;
        const result = eval(code);
        resultado.innerHTML = `Resultado: ${result}`;
    } catch (error) {
        resultado.innerHTML = `Error: ${error.message}`;
    }
});
