
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRoutes =require('../routes/userRoutes');
const UserModel = require('../models/userModels');

const {USER}  = require('../message.json');

const signup = async (req, res) => {

    const { firstName,lastName,contact,email,password,role,profile,joiningDate,lastWorkingDate } = req.body;
 
    try {
        // const existingUser = await UserModel.findOne({ email: email });
        // console.log(existingUser,"existingUser")
        // if (existingUser) {
        //     return res.status(400).json({ message: "user already exists" })
        // }

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await UserModel.create({
            firstName: firstName,
            lastName: lastName,
            contact: contact,
            email: email,
            password: hashedPassword,
            role: role,
            profile: profile,
            joiningDate: joiningDate,
            lastWorkingDate:lastWorkingDate
            
        });

        const token = jwt.sign({ email: result.email, id: result._id }, "Akshara");
        res.status(201).json({ user: result, token: token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message:USER.Something_Went_Wrong });

    }

}
const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await UserModel.findOne({ email: email });
        if (!existingUser) {
            return res.status(404).json({ message: USER.USER_NOT_FOUND })
        }
        const matchPassword = await bcrypt.compare(password, existingUser.password);
        if (!matchPassword) {
            return res.status(400).json({ message: USER.WRONG_PASSWORD })
        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, "Akshara");
        res.status(201).json({ user: existingUser, token: token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message:USER.Something_Went_Wrong });

    }

}

module.exports = { signup, signin };