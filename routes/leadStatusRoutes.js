const express = require('express');
const router = express.Router();

const leadStatusContollers = require("../controllers/leadStatusControllers")

router.put('/leadstatus/update/:id',leadStatusContollers.updateLeadStatus)
router.put('/leadstatus/update/notes/:id',leadStatusContollers.updateNotes)




module.exports = router;