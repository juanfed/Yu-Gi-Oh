import React, { Fragment, useState } from 'react';
import google from '../assets/loginGoogle.png';
import '../styles/register.css';
import '../styles/login.css';


//trabajo con el login usando la autenticacion de google y facebook
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { useNavigate } from "react-router-dom" // version 6
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

	const [registro, setRegistro] = useState(false);
	return (
		<Fragment>
			{registro ? 
			<div className="contact">
				<div className="contact-wrapper">
					<h2 className="contact-titulo">Registrate</h2>
					<form className="contact-form">
						<label className="contact-labels">Nombre Completo</label>
						<input
							className="contact-inputs"
							type="text"
							name="name-register"
							placeholder="Tu Nombre Completo"
						/>
						<label className="contact-labels">Email</label>
						<input
							className="contact-inputs"
							type="email"
							name="user_email-register"
							id=""
							placeholder="Tu Email"
						/>
						<label className="contact-labels">Contraseña</label>
						<input
							className="contact-inputs"
							type="password"
							name="password-register"
							id=""
							placeholder="Contraseña"
						/>
						<label className="contact-labels">Confirma la Contraseña</label>
						<input
							className="contact-inputs"
							type="password"
							name="confirm-password-register"
							id=""
							placeholder="Confirma la Contraseña"
						/>
						<input className="submit-input" type="submit" value="Enviar" />
						<input className="cancel-input" type="submit" value="Cancelar" onClick={()=>(setRegistro(false))} />
					</form>
				</div>
			</div> : <div className='login'>
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
						cssClass='facebook' />
				</div>
				<div className='register'>
					<p>Don't have an account?</p>
					<button type='text' onClick={() => (setRegistro(true))}>Sing Up</button>
				</div>

			</div>
			}
		</Fragment>
	)
}

export default Login