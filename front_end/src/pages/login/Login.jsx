import { useContext, useState } from "react";
import { login } from "../../authContext/apiCalls";
import "./login.scss";
import { AuthContext } from "../../authContext/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {dispatch} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  }
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHoRw_ZiZCwD7bjftX5kWT1d0KUGAt-jX2g&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Sign In
          </button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Login</title>
//   </head>
//   <body>
//     <center>
//     <h1>Login</h1>
   
      
//     <form method="POST" action="/login">
//       <label for="email">Email: </label>
//       <input type="email" id="email" name="email" required>
//       <br>
//       <label for="password">Password:</label>
//       <input type="password" id="password" name="password" required>
//       <br>
//       <button type="submit">Log In</button>
//     </form>
//     <p>Don't have an account? <a href="/Register">Sign up</a></p>
//   </center>
//   </body>
// </html>




 // import { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// // import styles from "./styles.module.css";
// import styles from "./login.scss";

// const Login = () => {
// 	const [data, setData] = useState({ email: "", password: "" });
// 	const [error, setError] = useState("");

// 	const handleChange = ({ currentTarget: input }) => {
// 		setData({ ...data, [input.name]: input.value });
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const url = "http://localhost:8080/api/auth";
// 			const { data: res } = await axios.post(url, data);
// 			localStorage.setItem("token", res.data);
// 			window.location = "/";
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
// 		<div className={styles.login_container}>
// 			<div className={styles.login_form_container}>
// 				<div className={styles.left}>
// 					<form className={styles.form_container} onSubmit={handleSubmit}>
// 						<h1>Login to Your Account</h1>
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
// 							Sing In
// 						</button>
// 					</form>
// 				</div>
// 				<div className={styles.right}>
// 					<h1>New Here ?</h1>
// 					<Link to="/signup">
// 						<button type="button" className={styles.white_btn}>
// 							Sing Up
// 						</button>
// 					</Link>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Login;







// import React from "react";
// import "./login.scss";

// function Login() {
//   return (
//     <div className="login">
//       <div className="top">
//         <div className="wrapper">
//           <img
//             className="logo"
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHoRw_ZiZCwD7bjftX5kWT1d0KUGAt-jX2g&usqp=CAU" alt=""
//           />
//          </div>
//       </div>
//       <div className="container">
//         <form>
//             <h1>Sign In</h1>
//             <input type="email" placeholder="Email or Phone Number"/>
//             <input type="password" placeholder="Password"/>
//             <button className="LoginButton"> Sign In</button>
//             <span>New to Platform ? <b> Sign Up Now </b></span>
//             <small>
//                 This page is protected by google reCAPTCHA to ensure you're not a bot. <b> Learn more</b>
//             </small>
//         </form>
//       </div>
//     </div>
//   );
// }


// import React, { useContext } from 'react';
// import { useHistory } from 'react-router-dom';
// import { RegistrationContext } from '../register/RegisterContext';

// function Login() {
//   const { formData } = useContext(RegistrationContext);
//   const history = useHistory();

//   const handleLogin = () => {
    // You can handle login logic here
    // Use formData.name, formData.email, formData.password as needed
    //  history.push('/');
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <p>Welcome back, {formData.name}!</p>
//       <button onClick={handleLogin}>Log in</button>
//     </div>
//   );
// }

// export default Login;

// export default Login; -->
