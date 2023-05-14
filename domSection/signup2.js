window.onload = function() {
	document.getElementById('signup').onsubmit = function(event){
		event.preventDefault();
		const usrname = document.getElementById('usr').value;
		const pwd = document.getElementById('pwd').value;
    
		let noErr = true;
		let err = "";
		if (usrname.length < 1 || usrname.length > 8 ) {
			noErr = false;
			err += "<p>Ooops, username must be between 1 and 8 characters!</p>";
		}
		if (pwd.length < 1 || pwd.length > 10 ) {
			noErr = false;
			err += "<p>Ooops, password must be between 1 and 10 characters!</p>";
		}

		if (noErr) {
			document.getElementById('signup').submit();
		} else {

			document.getElementById('errorM').innerHTML = err;
		}

		
	}

}