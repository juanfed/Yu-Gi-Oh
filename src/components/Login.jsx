import React from 'react';
import '../styles/login.css';
import google from '../assets/loginGoogle.png';


//trabajo con el login usando la autenticacion de google
import GoogleLogin from 'react-google-login';

const Login = () => {
	const responseGoogle = (sucsess) => {
		console.log(sucsess);
		console.log(sucsess.profileObj);

	}
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
				<GoogleLogin
					clientId="39874577063-ujhsadl9bdtnhta5m1ndv1hrppjn706n.apps.googleusercontent.com"
					// buttonText="Sign up with Google"
					render={renderProps => (
						<div>
							<figure className='google--figure'>
								<img 
								disabled={renderProps.disabled}
								onClick={renderProps.onClick}
								src={google} alt="Login whit google" />
							</figure>
						</div>

					)}
					onSuccess={responseGoogle}
					onFailure={responseGoogle}
					cookiePolicy={'single_host_origin'}
				/>
			</div>
			<div className='register'>
				<p>Don't have an account?</p>
				<h4>Sing Up</h4>
			</div>
		</div>
	)
}

export default Login