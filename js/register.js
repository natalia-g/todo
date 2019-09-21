let formLogin = document.getElementById('formLogin');

// Form submit event
formLogin.addEventListener('submit', functionLogin);

// Function Login
function functionLogin(e){
	e.preventDefault();
	let login = document.getElementById('login').value
	let password = document.getElementById('password').value
	let confirm = document.getElementById('confirm').value
	if (login===''){
		alert('Login is required.');
		return;
	}
	if (password===''){
		alert('Password is required.');
		return;
	}
	if (confirm===''){
		alert('You must confirm Your password.');
		return;
	}
	if (password!==confirm){
		alert('Passwords must be the same');
		return;
	}

	console.log(login);
}
