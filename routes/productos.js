const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Obtiene la lista de productos
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: Lista de productos obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nombre:
 *                     type: string
 *                   precio:
 *                     type: number
 */
router.get('/productos', (req, res) => {
    res.json([
        { id: 1, nombre: 'Producto 1', precio: 100 },
        { id: 2, nombre: 'Producto 2', precio: 200 },
    ]);
});

module.exports = router;
