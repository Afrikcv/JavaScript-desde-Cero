// Crear objeto libro
class Libro {
    constructor(titulo, autor, anio, estado) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.estado = estado;
        this.capitulos = [];
    }

    describirLibro() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en ${this.anio}, el estado es: ${this.estado}.`);
        document.getElementById("libro-info").innerHTML = `
            <h2>${this.titulo}</h2>
            <p>Autor: ${this.autor}</p>
            <p>Año: ${this.anio}</p>
            <p>Estado: ${this.estado}</p>
            <h3>Capítulos:</h3>
            <ul>
                ${this.capitulos.map(capitulo => `<li>${capitulo}</li>`).join("")}
            </ul>
        `;
    }

    agregarCapitulo(capitulo) {
        this.capitulos.push(capitulo);
    }

    eliminarCapitulo(capitulo) {
        let indice = this.capitulos.indexOf(capitulo);
        if (indice !== -1) {
            this.capitulos.splice(indice, 1);
            console.log(`Capítulo "${capitulo}" eliminado.`);
        } else {
            console.log(`Capítulo "${capitulo}" no encontrado.`);
        }
    }
}

// Agregar evento de clic al botón "Crear Libro"
const btnCrearLibro = document.getElementById("crear-libro");

btnCrearLibro.addEventListener("click", () => {
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let anio = document.getElementById("anio").value;
    let estado = document.getElementById("estado").value;

    let libro = new Libro(titulo, autor, anio, estado);
    libro.describirLibro();
});
