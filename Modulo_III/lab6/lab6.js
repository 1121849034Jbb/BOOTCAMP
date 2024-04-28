// Autor: Tu Nombre
// Descripción: Este script maneja la lógica de los ejercicios 3, 4 y 5.

// Definición de variables, funciones, etc. de los scripts lab3.js, lab4.js, lab5.js
// Aquí puedes colocar el código de lab3.js, lab4.js, lab5.js según sea necesario
// Por ejemplo:

// lab3.js
const ejercicio3 = () => {

  // Definición de variables
  let productName = "";
  let productType = "";
  let quantity = "";
  let price = "";
  let latitude = "";
  let longitude = "";
  let product = {};

  // Función ArrowFunction para obtener datos del formulario llamada getProductDataForm

  const getProductDataForm = () => {
    productName = document.getElementById("inputProductName").value;
    productType = document.getElementById("inputProductType").value;
    quantity = document.getElementById("inputQuantity").value;
    price = document.getElementById("inputPrice").value;
    latitude = document.getElementById("inputLatitude").value;
    longitude = document.getElementById("inputLongitude").value;
  };


  // Función ArrowFunction para construir el objeto de producto llamada buildProductDataForRequest
  const buildProductDataForRequest = () => {
    product = {
      product_name: productName,
      product_type: productType,
      quantity: quantity,
      price: price,
      latitude: latitude,
      longitude: longitude
    };
  };

  // Evento de envío del formulario
  document.getElementById("productForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Validar el formulario antes de procesar los datos
    if (this.checkValidity() === false) {
      event.stopPropagation(); // Detener la propagación del evento si el formulario no es válido
      this.classList.add("was-validated"); // Agregar clases para mostrar los estilos de validación de Bootstrap
    } else {
      getProductDataForm(); // Obtener datos del formulario
      buildProductDataForRequest(); // Construir objeto de producto
      console.log(product); // Mostrar objeto de producto en consola (puedes enviarlo a tu servidor aquí)
    }
  });

};

// lab4.js
const ejercicio4 = () => {
  // Definición de variables
  let email = "";
  let name = "";
  let lastname = "";
  let phone = "";
  let pass = "";
  let user = {};


  // Función para obtener los datos del formulario
  const getUserDataForm = () => {
    email = document.getElementById("inputEmailRegistro").value;
    name = document.getElementById("inputName").value;
    lastname = document.getElementById("inputLastName").value;
    phone = document.getElementById("inputPhone").value;
    pass = document.getElementById("inputPassword").value;
  };

  // Función para construir el objeto de usuario
  const buildUserDataForRequest = () => {
    user = {
      email: email,
      name: name,
      lastname: lastname,
      phone: phone,
      pass: pass
    };
  };

  // Manejador de envío del formulario
  document.getElementById("registroForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    getUserDataForm(); // Obtener datos del formulario
    buildUserDataForRequest(); // Construir objeto de usuario
    console.log(user); // Mostrar objeto de usuario en consola (puedes enviarlo a tu servidor aquí)
  });

};

// lab5.js

const ejercicio5 = () => {

  // Definición de variables
  let email = "";
  let pass = "";
  let login = {};

  // Función para obtener los datos del formulario
  const getUserDataForm = () => {
    email = document.getElementById("inputEmailLogin").value;
    pass = document.getElementById("inputPassword").value;
  };

  // Función para construir el objeto de inicio de sesión
  const buildLoginDataForRequest = () => {
    login = {
      email: email,
      pass: pass
    };
  };

  // Manejador de envío del formulario de inicio de sesión
  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    getLoginDataForm(); // Obtener datos del formulario de inicio de sesión
    buildLoginDataForRequest(); // Construir objeto de inicio de sesión
    console.log(login); // Mostrar objeto de inicio de sesión en consola (puedes enviarlo a tu servidor aquí)
  });

};