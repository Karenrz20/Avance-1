// Elementos del DOM
let nameTxt = document.getElementById("user-name");
let jobTxt = document.getElementById("user-job");
let image = document.getElementById("user-image");

// Fetch a la API de Random Data API
fetch("https://random-data-api.com/api/v2/users?size=1")
    .then((response) => response.json())
    .then((user) => {
        // La API devuelve un array, tomamos el primer elemento
        const userData = user;

        // Asignar datos al DOM
        nameTxt.innerText = `${userData.first_name} ${userData.last_name}`;
        jobTxt.innerText = userData.employment.title;
        image.setAttribute("src", userData.avatar);
    })
    .catch((error) => console.error("Error al obtener datos:", error));
