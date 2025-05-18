const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/', cartController.getAllCartItems);
router.get('/by-user', cartController.getCartByUserId); // /api/cart/by-user?user_id=xxx
router.post('/', cartController.createCartItem);
router.put('/:id', cartController.updateCartItem);
router.delete('/:id', cartController.deleteCartItem);

module.exports = router;
