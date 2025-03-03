// Declara una variable llamada nota y asígnale un valor numérico entre 0 y 100
let nota = 85; // Puedes cambiar este valor para probar diferentes casos

// Verifica si el valor de nota es mayor que 0 (truthy)
if (nota > 0) {
  // Utiliza operadores de comparación para determinar el rango de la nota
  if (nota >= 90) {
    console.log(`La nota es ${nota}. Excelente!`);
  } else if (nota >= 75) {
    console.log(`La nota es ${nota}. Bien!`);
  } else if (nota >= 60) {
    console.log(`La nota es ${nota}. Suficiente.`);
  } else {
    console.log(`La nota es ${nota}. No apruebas.`);
  }
} else {
  console.log("La nota no es válida.");
}
