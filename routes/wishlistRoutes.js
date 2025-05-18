const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/wishlistController');
/**
 * @swagger
 * /api/wishlist:
 *   get:
 *     summary: Lấy tất cả mục trong danh sách yêu thích
 *     responses:
 *       200:
 *         description: Danh sách mục yêu thích
 */
router.get('/', wishlistController.getAllWishlistItems);
/**
 * @swagger
 * /api/wishlist/by-user:
 *   get:
 *     summary: Lấy danh sách yêu thích theo ID người dùng
 *     parameters:
 *       - in: query
 *         name: user_id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Danh sách mục yêu thích của người dùng
 */
router.get('/by-user', wishlistController.getWishlistByUserId); // /api/wishlist/by-user?user_id=xxx
/**
 * @swagger
 * /api/wishlist/{id}:
 *   get:
 *     summary: Lấy mục yêu thích theo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Mục yêu thích
 */
router.post('/', wishlistController.createWishlistItem);
/**
 * @swagger
 * /api/wishlist:
 *   post:
 *     summary: Cập nhật mục yêu thích
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Mục yêu thích đã được cập nhật
 */
router.delete('/:id', wishlistController.deleteWishlistItem);

module.exports = router;
