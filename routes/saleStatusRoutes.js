const express = require('express');
const router = express.Router();

const saleStatusControllers = require("../controllers/saleStatusControllers")


router.put('/salestatus/update/:id',saleStatusControllers.updatesaleStatus)
router.put('/salestatus/update/notes/:id',saleStatusControllers.updatenotes)


module.exports = router;