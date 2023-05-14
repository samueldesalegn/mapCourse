window.onload = function () {
    document.getElementById('signup').onsubmit = function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        let noError = true;
        let err = '';
        if (username.length < 1 || username.length > 8) {
            noError = false;
            err += '<p>Opps,username must be between 1 to 8</p>';
        }

        if (password.length < 1 || password.length > 10) {
            noError = false;
            err += '<p>Opps,password must be between 1 to 10</p>';
        }

        if(noError) {
            this.submit();
        } else {        
            document.getElementById('errorMsg').innerHTML = err;
        } 
    }
}