const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) {
    try {
        $n.textContent = 'Cargando...';

        const response = await fetch(`${usersEndpoint}/${username}`);
        const data = await response.json();

        // Actualiza el contenido de los elementos
        $n.textContent = data.name || 'Nombre no disponible';
        $b.textContent = data.blog || 'Blog no disponible';
        $l.textContent = data.location || 'Ubicación no disponible';

    } catch (err) {
        handleError(err);
    }
}

function handleError(err) {
    console.log('OH NO!');
    console.log(err);
    $n.textContent = `Algo salió mal: ${err.message}`;
}

// Llama a la función
displayUser('stolinski');