import React from 'react';
import '../styles/login.css';

import google from '../assets/loginGoogle.png';

const Login = () => {
	return (
		<div className='login'>
			<h4 className='login--title'>User Login</h4>
			<div className='login--datos'>
				<input type="email"
					placeholder='Email Address'
					className='login--input' />

				<input type="password"
					placeholder='Password'
					className='login--input' />

				<button className='login--buton'>Sing In</button>
			</div>
			<div className='google'>
				<figure className='google--figure'>
					<img src={google} alt="Login whit google" />
				</figure>
			</div>
			<div className='register'>
				<p>Don't have an account?</p>
				<h4>Sing Up</h4>
			</div>
		</div>
	)
}

export default Login