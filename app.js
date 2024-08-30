const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app = express();

// Opciones de configuración para Swagger
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Productos y Carrito',
            version: '1.0.0',
            description: 'Documentación de la API de Productos y Carrito',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./routes/*.js'], // Ubicación de los archivos de rutas
};

// Inicializar Swagger JSDoc
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Importar y usar las rutas
const productosRoutes = require('./routes/productos');
const carritoRoutes = require('./routes/carrito');

app.use('/api', productosRoutes);
app.use('/api', carritoRoutes);

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
