
const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");



// Register
router.post("/register", async (req, res) => {

  let userWithUsername = await User.findOne({ username: req.body.username });
  if (userWithUsername) {
    return res.status(401).json("username already exist!");
  }
  
  let userWithEmail = await User.findOne({ email: req.body.email });
  if (userWithEmail) {
    return res.status(401).json("email already exist!");
  }
  
  // let user = new User(req.body);
  // await user.save();
  
  // console.log('user registration ',user);
  



    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SECRET
      ).toString(),
      // var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
    });

    console.log("new user",newUser);

    try {

        const savedUser = await newUser.save(); 
        res.status(201).json(savedUser);
    } catch (err) {
      console.log("error", err);
        res.status(500).json(err);
    }
});




// Login
router.post("/login", async (req, res) => {
    try {
      console.log("req.body",req.body)
      console.log(req.body.username)
      const user = await User.findOne({ username: req.body.username });
      !user && res.status(401).json("Wrong Credentials!");
  
    
  
      const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASS_SECRET
      );
      const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
  
      OriginalPassword !== req.body.password &&
        res.status(401).json("Wrong credentials!");

          const accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET,
        { expiresIn: "3d" }
        //  this access token expires in 3days. User is to login again after 3days.
      );
  
      const { password, ...others } = user._doc;
  
      res.status(200).json({ ...others, accessToken });
    //   res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });






module.exports = router;