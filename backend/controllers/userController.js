const User = require('../models/user');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    const {username, email, password} = req.body;
    const newUser = new User({username, email, password});
    await newUser.save();
    res.status(200).json({ message: "User registered successfully" });
}

const loginUser = async (req, res) => {
    const {username, password} = req.body;
    try {
        const foundUser = await User.validateUser(username, password);
        console.log("Found User: ", foundUser);
        if(foundUser) {
            const token = jwt.sign({ id: foundUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            console.log("JWT Token: ", token);
            res.status(200).json({message:`Welcome ${username}`, token, user:foundUser});
        } else {
            res.status(401).json({message:`Invalid username or password`});
        }        
    } catch (error) {
        console.error('Login Error: ', error);
        res.status(500).json({message:`Server error during login!`})
    }
}

module.exports = {registerUser, loginUser};