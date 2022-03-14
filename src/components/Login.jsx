import React from 'react';
import '../styles/login.css';
import google from '../assets/loginGoogle.png';


//trabajo con el login usando la autenticacion de google y facebook
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { useNavigate} from "react-router-dom" // version 6
const Login = () => {
	useNavigate();
	const navigate = useNavigate();
	const responseGoogle = (sucsess) => {
		console.log(sucsess);
		console.log(sucsess.profileObj);
		navigate('/admin/cards');

	}

	const responseFacebook = (response) => {
		console.log(response);
		navigate('/admin/cards');
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

				<FacebookLogin
					appId="249526474055454"
					autoLoad={false}
					fields="name,email,picture"
					callback={responseFacebook}
					textButton=" Sign up with Facebook"
					icon="fa-facebook"
					cssClass='facebook'/>
			</div>
			<div className='register'>
				<p>Don't have an account?</p>
				<h4>Sing Up</h4>
			</div>
		</div>
	)
}

export default Login