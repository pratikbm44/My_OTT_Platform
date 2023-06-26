// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const Joi = require("joi");
// const passwordComplexity = require("joi-password-complexity");


// const UserSchema = new mongoose.Schema({
// 	firstName: { type: String, required: true },
// 	lastName: { type: String, required: true },
// 	email: { type: String, required: true },
// 	password: { type: String, required: true },
// });

// UserSchema.methods.generateAuthToken = function () {
// 	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
// 		expiresIn: "60d",
// 	});
// 	return token;
// };

// const user = mongoose.model("User", UserSchema);

// const validate = (data) => {
// 	const schema = Joi.object({
// 		firstName: Joi.string().required().label("First Name"),
// 		lastName: Joi.string().required().label("Last Name"),
// 		email: Joi.string().email().required().label("Email"),
// 		password: passwordComplexity().required().label("Password"),
// 	});
// 	return schema.validate(data);
// };

// module.exports = { user, validate };
const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    username:{type:String, required:true, unique:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    profilePic:{type:String, default : "" },
    isAdmin:{type:Boolean, default:false},
    
},
{timestamps:true}
);
 module.exports = mongoose.model("User",UserSchema);
//  UserSchema.methods.generateAuthToken = function () {
// 	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
// 		expiresIn: "30d",
// 	});
// 	return token;
// }; 

// const user = mongoose.model("User",UserSchema);

// const validate = (data) => {
// 	const schema = Joi.object({
// 		firstName: Joi.string().required().label("First Name"),
// 		lastName: Joi.string().required().label("Last Name"),
// 		email: Joi.string().email().required().label("Email"),
// 		password: passwordComplexity().required().label("Password"),
// 	});
// 	return schema.validate(data);
// };

// module.exports = { user, validate };