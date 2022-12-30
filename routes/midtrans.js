const express = require("express");
const controller = require('../controllers/midtrans');

const router = express.Router();

router.post("/midtrans/bayar", controller.bayar);
router.post("/midtrans/status", controller.status);
router.post("/midtrans/cancel", controller.cancel);

module.exports = router;