const User = require('../models/user');

const registerUser = async (req, res) => {
    const {username, email, password} = req.body;
    const newUser = new User({username, email, password});
    await newUser.save();
    res.send(newUser);
}

const loginUser = async (req, res) => {
    const {username, password} = req.body;
    try {
        const foundUser = await User.validateUser(username, password);
        if(foundUser) {
            res.status(200).json({message:`Welcome ${username}`, user:foundUser});
        } else {
            res.status(401).json({message:`Invalid username or password`});
        }        
    } catch (error) {
        console.error('Login Error: ', error);
        res.status(500).json({message:`Server error during login!`})
    }
}

module.exports = {registerUser, loginUser};