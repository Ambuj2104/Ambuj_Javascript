function validation(){

			var user = document.getElementById('username').value;
			var pass = document.getElementById('password').value;
			var email = document.getElementById('email').value;
			





			if(user == ""){
				messages.push('Name is required')
			}
			if((user.length <= 2) || (user.length > 20)) {
				document.getElementById('username').innerHTML =" ** Username length must be between 3 and 20";
				return false;	
			}
			if(!isNaN(user)){
				document.getElementById('username').innerHTML =" ** only characters are allowed";
				return false;
			}
		







			if(pass == ""){
				document.getElementById('password').innerHTML =" ** Please fill the password field";
				return false;
			}
			if((pass.length <= 5) || (pass.length > 20)) {
				document.getElementById('password').innerHTML =" ** Passwords length must be between  6 and 20";
				return false;	
			}

			





			if(email == ""){
				document.getElementById('email').innerHTML =" ** Please fill the email idx` field";
				return false;
			}
			if(email.indexOf('@') <= 0 ){
				document.getElementById('email').innerHTML =" ** @ Invalid Position";
				return false;
			}

			if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
				document.getElementById('email').innerHTML =" ** . Invalid Position";
				return false;
			}
		}