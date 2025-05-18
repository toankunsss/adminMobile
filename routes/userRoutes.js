const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Lấy tất cả người dùng
 *     responses:
 *       200:
 *         description: Danh sách người dùng
 */
router.get('/', userController.getAllUsers);
/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Lấy người dùng theo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Người dùng
 */
router.get('/:id', userController.getUserById);
/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Tạo người dùng mới
 *     responses:
 *       201:
 *         description: Đã tạo người dùng
 */
router.post('/', userController.createUser);
/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Cập nhật người dùng
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Đã cập nhật người dùng
 */
router.put('/:id', userController.updateUser);
/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Xóa người dùng
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Đã xóa người dùng
 */
router.delete('/:id', userController.deleteUser);

module.exports = router;
