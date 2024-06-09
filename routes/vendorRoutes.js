const express = require('express');
const router = express.Router();

const vendorControllers = require("../controllers/vendorControllers")


router.get('/vendors/all',vendorControllers.getAllvendor)
router.post('/vendors/add',vendorControllers.addvendor)
router.put('/vendors/update/:id',vendorControllers.updatdevendor)
router.delete('/vendors/delete/:id',vendorControllers.deletevendor)
router.get('/vendors/getById/:id',vendorControllers.getById)


router.get('/vendorCategory/viewall',vendorControllers.getAllCategories)
router.post('/vendorCategory/add',vendorControllers.addCategory)
router.delete('/vendorCategory/delete',vendorControllers.deleteCategory)
router.put('/vendorCategory/update',vendorControllers.updateCategory)

module.exports = router;