import './Login.css';

const Login = () => {
	return (
		<div className='login'>
			<form className='login__form'>
				<div className="blob-top"></div>
				<div className="blob-bottom"></div>
				<div className='circle'></div>
				<h1>Iniciar Sesión</h1>
				<div className="form">
					<div className='form__email'>
						<label htmlFor='email'>Correo: </label>
						<input type='email' id='email' placeholder='example@gameil.com' />
					</div>
					<div className='form__password'>
						<label htmlFor='password'>Contraseña: </label>
						<input type='password' id='password' placeholder='***********' />
					</div>
					<div className="form__helps">
						<div className="forgetPassword">
							<input type="checkbox" name="" id="" /> Recuerda
						</div>
						<a href="">Olvide mi contraseña</a>
					</div>
				</div>
				<button className='form__button'>Ingresar</button>
			</form>
			<div className='login__banner'>

			</div>
		</div>
	);
};

export default Login;