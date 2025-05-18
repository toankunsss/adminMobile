const express = require('express');
const router = express.Router();
const orderItemController = require('../controllers/orderItemController');

router.get('/', orderItemController.getAllOrderItems);
router.get('/by-order', orderItemController.getOrderItemsByOrderId); // /api/order_items/by-order?order_id=xxx
router.post('/', orderItemController.createOrderItem);
router.put('/:id', orderItemController.updateOrderItem);
router.delete('/:id', orderItemController.deleteOrderItem);

module.exports = router;
