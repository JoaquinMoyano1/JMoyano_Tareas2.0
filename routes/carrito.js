const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /carrito:
 *   get:
 *     summary: Obtiene el carrito de compras
 *     tags: [Carrito]
 *     responses:
 *       200:
 *         description: Carrito obtenido correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 productos:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       cantidad:
 *                         type: integer
 */
router.get('/carrito', (req, res) => {
    res.json({
        productos: [
            { id: 1, cantidad: 2 },
            { id: 2, cantidad: 1 },
        ],
    });
});

module.exports = router;
