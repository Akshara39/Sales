const express = require('express');
const router = express.Router();


const userControllers = require('../controllers/userControllers')


router.post("/user/signup", userControllers.signup );

router.get("/user/getAllUser", userControllers.signup);

router.post("/user/signin", userControllers.signin );





module.exports = router;