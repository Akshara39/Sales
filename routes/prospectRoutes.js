const express = require('express');
const router = express.Router();

const prospectControllers = require("../controllers/prospectControllers")

router.get('/prospect/getall',prospectControllers.viewAll)
router.post('/prospect/add',prospectControllers.addProspect)
router.post('/prospect/bulkadd',prospectControllers.addBulkProspect)



module.exports = router;