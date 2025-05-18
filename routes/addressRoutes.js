const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');

router.get('/', addressController.getAllAddresses);

router.get('/by-user', addressController.getAddressesByUserId); // /api/address/by-user?user_id=xxx

router.post('/', addressController.createAddress);

router.put('/:id', addressController.updateAddress);
router.delete('/:id', addressController.deleteAddress);
router.post('/select', addressController.selectAddress); // /api/address/select

module.exports = router;
