/**
 *     @author jose jeferson beltran  <josejefersonbbb@gmail.com>
 *     @fileOverview Descripción: Este script maneja la lógica del formulario de registro.
 *    
 */

// Definición de variables
let email = "";
let name = "";
let lastname = "";
let phone = "";
let pass = "";
let user = {};

// Función para obtener datos del formulario de usuario
const getUserDataForm = () => {
    email = document.getElementById("email").value;
    name = document.getElementById("name").value;
    lastname = document.getElementById("lastname").value;
    phone = document.getElementById("phone").value;
    pass = document.getElementById("password").value;
};

// Función para construir objeto de usuario para la solicitud
const buildUserDataForRequest = () => {
    getUserDataForm();
    user = {
        email: email,
        name: name,
        lastname: lastname,
        phone: phone,
        pass: pass
    };
    return user;
};

  



  


