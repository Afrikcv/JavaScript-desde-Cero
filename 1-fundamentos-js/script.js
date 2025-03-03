// Tipos de datos en JavaScript

console.log("📌 Tipos de datos en JavaScript");

// Números
console.log("✅ Número:", typeof 42);
console.log("✅ Número negativo:", typeof -666);
console.log("✅ Cero:", typeof 0);
console.log("✅ NaN (Not a Number):", typeof NaN);
console.log("✅ Infinity:", typeof Infinity);
console.log("✅ -Infinity:", typeof -Infinity);

// Cadenas de texto (Strings)
console.log("✅ String:", typeof 'Veinticinco');
console.log("✅ String vacío:", typeof '');
console.log("✅ String con palabra 'true':", typeof 'true');
console.log("✅ String con palabra 'false':", typeof 'false');
console.log("✅ String con palabra 'null':", typeof 'null');
console.log("✅ String con palabra 'undefined':", typeof 'undefined');

// Booleanos
console.log("✅ Boolean (true):", typeof true);
console.log("✅ Boolean (false):", typeof false);

// Null y Undefined
console.log("✅ Null:", typeof null); // Retorna 'object' (error histórico de JS)
console.log("✅ Undefined:", typeof undefined);

// Arreglos
console.log("✅ Array:", typeof [1, 2, 3]);

// Objetos
console.log("✅ Objeto:", typeof { nombre: 'Juan' });

// Funciones
console.log("✅ Función:", typeof function(){} );

// Ejemplos adicionales
console.log("✅ Symbol:", typeof Symbol('mi-simbolo'));
console.log("✅ BigInt:", typeof BigInt(42));
