const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const { models } = require('../models/index.js');

module.exports = {
    async register(req, res) {

        return req;
        try {

            const { email, password } = req.body;
            // Check user enters all fields
            if (!email || !password) return res.status(400).json({ message: "Please provide email and password" });
            // Check the user enters the right formatted email
            const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (reg.test(email) === false) return res.status(400).json({ message: "Incorrect email format" });
            // Check user password length is more than 8 characters
            if (password.length < 6) return res.status(400).json({ message: "Password must be at least 6 characters long" });

            // create new User object to be saved in Database
            const newUser = new User({
                email,
                password
            })

            // Check if user already exist
            const user = await models.User.findOne({ email })
            if (user) return res.status(400).json({ message: "Email already registered. Please Login" });

            // Generate Password Hash
            bcrypt.genSalt(10, (err, salt) => {
                if (err) throw err;
                bcrypt.hash(password, salt, async (err, hash) => {
                    if (err) throw err;
                    // Add hashed password to new user object
                    newmodels.User.password = hash;
                    //Save user to DB
                    const user = await newmodels.User.save();
                    // create json web token and send it back to client side
                    jwt.sign({ userId: user.id }, config.jwtSecret, { expiresIn: 60 * 60 }, (err, token) => {
                        if (err) throw err;
                        res.json({
                            token,
                            email
                        })
                    })

                })
            });

        } catch (err) {
            throw err;
        }
    },

    async login(req, res) {

        
        // return res.status(200).json({pass:bcrypt.hash(123456)})
        // bcrypt.genSalt(10, (err, salt) => {
        //     if (err) throw err;
        //     bcrypt.hash("123456", salt, async (err, hash) => {
        //         if (err) throw err;
        //         // Add hashed password to new user object
        //         res.status(200).json({hash})
               

        //     })
        // });

        // return;

        try {

            const { mobile, password } = req.body;

            // Check user enters all fields
            if (!mobile || !password) return res.status(400).json({ message: "لطفا نام کاربری و رمز عبور را وارد نمایید" });
            // Check for correct mobile
            const user = await models.User.findOne({ where: { mobile:mobile } });
            // if mobile not found
            if (!user) return res.status(400).json({ message: "لطفا نام کاربری و رمز عبور را بررسی نمایید"  })
            // if mobile found compare hashed password with incoming password
            
            // console.log({mobile})
            
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) throw err;
                const match = result;
                if (!match) return res.status(401).json({ message: "لطفا نام کاربری و رمز عبور را بررسی نمایید"  })
                // create json web token and send it back to client side
                delete user.password;
                jwt.sign({ user,userId:user.id }, config.jwtSecret, { expiresIn: 60 * 60 }, (err, token) => {
                    if (err) throw err;
                    delete user.dataValues.password;
                    res.json({
                        token,
                        ...user.dataValues
                    })
                })
            })

        } catch (err) {
            console.log(err);
        }
    },
    // get user information
    async getUser(req, res) {
        try {
            // find user by id
            const user = await models.User.findById(req.userId)
                // return all info but password
                .select("-password");
            // send info to client
            res.json(user)
        } catch (err) {
            throw err;

        }
    }

};