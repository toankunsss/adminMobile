const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

router.get('/', notificationController.getAllNotifications);
router.get('/by-user', notificationController.getNotificationsByUserId); // /api/notification/by-user?user_id=xxx
router.post('/', notificationController.createNotification);
router.put('/:id', notificationController.updateNotification);
router.delete('/:id', notificationController.deleteNotification);

module.exports = router;
