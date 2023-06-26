// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const app = express();
// const port = process.env.PORT || 3000;
// const student = require("../models/database.js");

// const UserSchema = new mongoose.Schema({
//   email: { type: String, unique: true },
//   password: String,
// });

// const User = mongoose.model('User', UserSchema);

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));
// app.set('view engine', 'ejs');

// if (!mongoose.connection.readyState) {
//   mongoose.connect('mongodb://localhost:27017', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// }

// app.get('/', (req, res) => {
//   res.render('login');
// });

// app.get('/login', (req, res) => {
//   const message = 'Enter your login credentials';
//   res.render('login', { message });
// });

// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });
//   if (!user) {
//     return res.status(401).send('Invalid email or password');
//   }
//   const isValidPassword = await bcrypt.compare(password, user.password);
//   if (!isValidPassword) {
//     return res.status(401).send('Invalid email or password');
//   }
//   res.send('Logged in successfully');
// });

// app.get('/signup', (req, res) => {
//   res.render('signup');
// });

// app.post('/signup', async (req, res) => {
//   const { email, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const user = new User({ email, password: hashedPassword });
//   try {
//     await user.save();
//     res.redirect('/login');
//   } catch (error) {
//     res.status(400).send('Email already exists');
//   }
// });

// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });


// const router = require("express").Router();
// const { User } = require("../models/User");
// const bcrypt = require("bcrypt");
// const Joi = require("joi");

// router.post("/", async (req, res) => {
// 	try {
// 		const { error } = validate(req.body);
// 		if (error)
// 			return res.status(400).send({ message: error.details[0].message });

// 		const user = await User.findOne({ email: req.body.email });
// 		if (!user)
// 			return res.status(401).send({ message: "Invalid Email or Password" });

// 		const validPassword = await bcrypt.compare(
// 			req.body.password,
// 			user.password
// 		);
// 		if (!validPassword)
// 			return res.status(401).send({ message: "Invalid Email or Password" });

// 		const token = user.generateAuthToken();
// 		res.status(200).send({ data: token, message: "logged in successfully" });
// 	} catch (error) {
// 		res.status(500).send({ message: "Internal Server Error" });
// 	}
// });

// const validate = (data) => {
// 	const schema = Joi.object({
// 		email: Joi.string().email().required().label("Email"),
// 		password: Joi.string().required().label("Password"),
// 	});
// 	return schema.validate(data);
// };

// module.exports = router;












const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  }); 
  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Wrong password or username!");

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.password &&
      res.status(401).json("Wrong password or username!");

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "500d" }
    );

    const { password, ...info } = user._doc;

    res.status(200).json({ ...info, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;