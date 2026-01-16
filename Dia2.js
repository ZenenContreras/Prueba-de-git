//  Ejercicio 4: El Buscador con "Delay" (Promesas)
// Crea una función llamada searchUser(id) que:

// Reciba un ID.

// Simule una carga de red de 2 segundos usando setTimeout y Promises.

// Si el ID es igual a 10, la promesa debe "resolverse" con el nombre "Admin".

// Si el ID es cualquier otro, la promesa debe "rechazarse" con el mensaje "Error: Usuario no encontrado". 

async function searchUser(id){
    const promise = new Promise((resolve, reject)=> {
        setTimeout(()=>{
            id === 10 ? resolve('Admin')  : reject('Error: Usuario no encontrado')
        },2000)
    })
    try {
        const result = await promise
        console.log(result)
    } catch (error) {
        console.error(error)
    }
}


// Ejercicio 5: Consumo de API Real (Async/Await)
// Usa la API gratuita de JSONPlaceholder para traer una lista de "Posts".

// Haz un fetch a https://jsonplaceholder.typicode.com/posts.

// Muestra en consola solo los títulos de los primeros 5 posts.

// Importante: Envuelve todo en un bloque try/catch y fuerza un error (cambiando la URL por una incorrecta) para ver si tu mensaje de error personalizado funciona.

async function jsonplaceholder (){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        console.log(data.slice(0,5).map(obj => obj.title))
    } catch (error) {
        console.error('Error: ', error)
    }
}

jsonplaceholder()