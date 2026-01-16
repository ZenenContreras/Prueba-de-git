// Día 1: Dominio de Arrays y Objetos (Data Transformation)
// En el trabajo real, el backend te enviará datos "sucios" o desordenados. Tu misión es transformarlos para la UI.


// Ejercicio 1: El Filtro de Ventas
// Tienes un array de objetos que representan ventas. Debes obtener solo los nombres de los usuarios que compraron productos de la categoría "Electronics" y que gastaron más de $500.

const sales = [
  { id: 1, user: "Juan", amount: 150, category: "Clothing" },
  { id: 2, user: "Maria", amount: 600, category: "Electronics" },
  { id: 3, user: "Pedro", amount: 450, category: "Electronics" },
  { id: 4, user: "Ana", amount: 1200, category: "Electronics" },
  { id: 5, user: "Luis", amount: 100, category: "Clothing" },
];

const salesFilter = sales.filter(sale=> sale.amount > 500 && sale.category === 'Electronics').map(sale => sale.user)

// Ejercicio 2: El "Jefe Final" (.reduce)
// Tienes una lista de productos en un carrito. Necesitas calcular el total a pagar, pero teniendo en cuenta que algunos productos tienen un descuento (ej. 0.1 es 10%). Si el producto no tiene la propiedad discount, el descuento es 0.

const cart = [
  { name: "Laptop", price: 1000, discount: 0.2 }, // 20% off
  { name: "Mouse", price: 50 },
  { name: "Monitor", price: 300, discount: 0.1 },
  { name: "Keyboard", price: 100 },
];

const total = cart.reduce((acc, item) => {
    const itemWithDiscount = item.price * (1 - (item.discount || 0 ))
    return acc += itemWithDiscount
}, 0)

// Ejercicio 3: Reestructuración de Datos
// Convierte este array de estudiantes en un objeto donde las keys sean el id de cada estudiante para poder acceder a ellos rápidamente.

const students = [
  { id: "a1", name: "Alice", grade: 9 },
  { id: "b2", name: "Bob", grade: 8 },
  { id: "c3", name: "Charlie", grade: 10 },
];

// Resultado esperado: { a1: { name: "Alice", grade: 9 }, b2: { ... }, ... }

const newStudents = students.reduce((acc, student) => {
    acc[student.id] = student
    return acc
}, {})

console.log(newStudents)