import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js"

/* REGISTER USER */
const register = async(req, res) => {
    try{
        const {
            firstName,
            lastname,
            email,
            password,
            picturePath,
            friends, 
            location,
            occupation
        } = req.body;
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        const newUser = new User({
            firstName,
            lastname,
            email,
            password: passwordHash,
            picturePath,
            friends, 
            location,
            occupation,
            viewdProfile: Math.floor(Math.random() * 10000),
            impressions: Math.floor(Math.random() * 10000),
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch(err){
        res.status(500).json({error: err.message});
    }
}

/* LOGGING IN */
const login = async(req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({ email: email });
        if (!user) return res.status(400).json({ msg: " User does not exist. "});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({ msg: " Invalid credentials. "});

        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET);
        delete user.password;
        res.status(500).json({ token, user})
    } catch(err){
        res.status(500).json({error: err.message});
    }
}

export default register;
