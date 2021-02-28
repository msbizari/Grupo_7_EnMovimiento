const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();

router.get('/detalleDeproducto/:id', mainController.detalleDeproducto);
router.get('/carrito', mainController.carrito);
router.get('/listadoProductos', mainController.listadoProductos);

module.exports = router;