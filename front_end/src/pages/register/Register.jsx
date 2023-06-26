import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post("auth/register", { email,username, password });
      history.push("/login");
    } catch (err) {}
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHoRw_ZiZCwD7bjftX5kWT1d0KUGAt-jX2g&usqp=CAU" alt=''
          />
{/* <button className="loginButton">Sign In</button> */}
        </div>
      </div>
      <div className="container">
      <form className='InputForm'>
             <h1>Sign Up</h1><br/>
             <input type="username" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
           {/* <input type="email" placeholder="Email"/> */}
           <input type="email" placeholder="email address" ref={emailRef} /> 
           
             <input type="Number" placeholder="Mobile Number"/>
             {/* <input type="password" placeholder="Password"/> */}
             {/* <input type="password" placeholder="Confirm password"/> */}
             {!email ? (
          <div className="input">
            
            <button className="registerButton" onClick={handleStart}>
              Register
            </button>
            </div>

            
        ) : (
          <form className="input">
           
           <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
          
        )}
        
          
            {/* <button className='signInButton'> <Link to="/Login">Sign Up</Link> </button> */}
             <span>Already Register ? <b> Sign In Now </b></span>
             <small>
                 This page is protected by google reCAPTCHA to ensure you're not a bot. <b> Learn more</b>
             </small>
         </form>
        {/* <h1>Unlimited movies, TV shows, and more.</h1> */}
        {/* <h2>Watch anywhere. Cancel anytime.</h2> */}
        {/* <p> */}
          {/* Ready to watch? Enter your email to create or restart your membership. */}
        {/* </p> */}
       
      </div>
    </div>
  );
}

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Sign Up</title>
//   </head>
//   <body>
//     <center>
//     <h1>Sign Up</h1>
    
//     <form method="POST" action="/signup">
//       <label for="email">Email:</label>
//       <input type="email" id="email" name="email" required>
//       <br>
//       <label for="password">Password:</label>
//       <input type="password" id="password" name="password" required>
//       <br>
//       <button type="submit">Sign Up</button>
//     </form>
//     <p>Already have an account? <a href="/login">Log in</a></p>
//     </center>
//   </body>
// </html>


 // import { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import styles from "./register.scss";

// const Signup = () => {
// 	const [data, setData] = useState({
// 		firstName: "",
// 		lastName: "",
// 		email: "",
// 		password: "",
// 	});
// 	const [error, setError] = useState("");
// 	// const navigate = useNavigate();

// 	const handleChange = ({ currentTarget: input }) => {
// 		setData({ ...data, [input.name]: input.value });
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const url = "http://localhost:8080/api/users";
// 			const { data: res } = await axios.post(url, data);
// 			// navigate("/login");
// 			console.log(res.message);
// 		} catch (error) {
// 			if (
// 				error.response &&
// 				error.response.status >= 400 &&
// 				error.response.status <= 500
// 			) {
// 				setError(error.response.data.message);
// 			}
// 		}
// 	};

// 	return (
// 		<div className={styles.signup_container}>
// 			<div className={styles.signup_form_container}>
// 				<div className={styles.left}>
// 					<h1>Welcome Back</h1>
// 					<Link to="/login">
// 						<button type="button" className={styles.white_btn}>
// 							Sing in
// 						</button>
// 					</Link>
// 				</div>
// 				<div className={styles.right}>
// 					<form className={styles.form_container} onSubmit={handleSubmit}>
// 						<h1>Create Account</h1>
// 						<input
// 							type="text"
// 							placeholder="First Name"
// 							name="firstName"
// 							onChange={handleChange}
// 							value={data.firstName}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="text"
// 							placeholder="Last Name"
// 							name="lastName"
// 							onChange={handleChange}
// 							value={data.lastName}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="email"
// 							placeholder="Email"
// 							name="email"
// 							onChange={handleChange}
// 							value={data.email}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="password"
// 							placeholder="Password"
// 							name="password"
// 							onChange={handleChange}
// 							value={data.password}
// 							required
// 							className={styles.input}
// 						/>
// 						{error && <div className={styles.error_msg}>{error}</div>}
// 						<button type="submit" className={styles.green_btn}>
// 							Sing Up
// 						</button>
// 					</form>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Signup;




// import React from 'react'
// import "./register.scss";
// import { Link } from 'react-router-dom/cjs/react-router-dom';

// function Register() {
//   return (
//     <div className="login">
//       <div className="top">
//         <div className="wrapper">
//           <img
//             className="logo"
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHoRw_ZiZCwD7bjftX5kWT1d0KUGAt-jX2g&usqp=CAU" alt=''
//           />
          
//          </div>
         
//       </div>
        
//       <div className="container">
//         <form className='InputForm'>
//             <h1>Sign Up</h1><br/>
//               <input type='text' placeholder='Name'/>
//             <input type="email" placeholder="Email"/>
//             <input type="Number" placeholder="Mobile Number"/>
//             <input type="password" placeholder="Password"/>
//             <input type="password" placeholder="Confirm password"/>
//             <button className='signInButton'> <Link to="/Login">Sign Up</Link> </button>
//             <span>Already Register ? <b> Sign In Now </b></span>
//             <small>
//                 This page is protected by google reCAPTCHA to ensure you're not a bot. <b> Learn more</b>
//             </small>
//         </form>
//       </div>
   
//     </div>
//   )
// } -->


//  import React, { useContext } from 'react';
// import { useHistory } from 'react-router-dom';
// import { RegistrationContext } from './RegisterContext';

// function Register() {
//   const { formData, setFormData, errors, setErrors, handleSubmit } = useContext(RegistrationContext);
//   const history = useHistory();

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   return (
//     <form onSubmit={handleSubmit((isValid = false) => {
//       if (typeof isValid === 'boolean' && isValid) {
//         setFormData({ name: '', email: '', password: '', confirmPassword: '' });
//         setErrors({});
//           history.push('/login');
//       }
//     })}>
//       <div>
//         <label htmlFor="name">Name</label>
//         <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
//         {errors.name && <div>{errors.name}</div>}
//       </div>
//       <div>
//         <label htmlFor="email">Email</label>
//         <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
//         {errors.email && <div>{errors.email}</div>}
//       </div>
//       <div>
//         <label htmlFor="password">Password</label>
//         <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
//         {errors.password && <div>{errors.password}</div>}
//       </div>
//       <div>
//         <label htmlFor="confirmPassword">Confirm Password</label>
//         <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
//         {errors.confirmPassword && <div>{errors.confirmPassword}</div>}
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   );
// } -->

// // export default Registration;

// export default Register