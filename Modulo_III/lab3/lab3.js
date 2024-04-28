/**
 *     @author jose jeferson beltran  <josejefersonbbb@gmail.com>
 *     @fileOverview TEste script maneja la lógica del formulario de producto.
 *    
 */

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