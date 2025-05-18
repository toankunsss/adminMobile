const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Lấy tất cả sản phẩm
 *     responses:
 *       200:
 *         description: Danh sách sản phẩm
 */
router.get('/', productController.getAllProducts);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Lấy sản phẩm theo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sản phẩm
 */
router.get('/:id', productController.getProductById);

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Tạo sản phẩm mới
 *     responses:
 *       201:
 *         description: Đã tạo sản phẩm
 */
router.post('/', productController.createProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Cập nhật sản phẩm
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Đã cập nhật sản phẩm
 */
router.put('/:id', productController.updateProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Xóa sản phẩm
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Đã xóa sản phẩm
 */
router.delete('/:id', productController.deleteProduct);

module.exports = router;
