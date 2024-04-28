/*
// Autor: jose jefersson beltran bernal
Descripción: Este script obtiene el avatar URL a través de Fetch API https://api.github.com/users/mojombo/followers y lo muestra en la consola del navegador.
*/

let url = `https://api.github.com/users/mojombo/followers`;

// Función ArrowFunction para obtener el avatar URL
const getAvatarUrl = () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
           
            // Verificamos si hay datos de seguidores
            if (data.length > 0) {
                // Iteramos sobre los datos de los seguidores
                data.forEach(follower => {
                   
                    // Extraemos y mostramos el avatar URL de cada seguidor
                    console.log("Avatar URL:", follower.avatar_url);
                });
            } else {
                console.log("No se encontraron seguidores.");
            }
        })
        .catch(error => console.log("Error al obtener los datos:", error));
};

// Llamada a la función getAvatarUrl
getAvatarUrl();
