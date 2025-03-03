// Agregar evento de clic al botón "Agregar Libro"
const btnAgregarLibro = document.getElementById("agregar-libro");

btnAgregarLibro.addEventListener("click", () => {
    const titulo = prompt("Ingrese el título del libro:");
    const autor = prompt("Ingrese el autor del libro:");
    const genero = prompt("Ingrese el género del libro:");

    agregarLibro(titulo, autor, genero);
});

// Agregar libros de ejemplo
agregarLibro("El amor en los tiempos del cólera", "Gabriel García Márquez", "Romance");
agregarLibro("La sombra del viento", "Carlos Ruiz Zafón", "Romance/Misterio");
agregarLibro("La noche es oscura y no tengo miedo", "Paulo Coelho", "Romance/Aventuras");