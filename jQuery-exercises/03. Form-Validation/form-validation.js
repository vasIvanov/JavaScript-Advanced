function validate() {
	let submitButton = $('#submit');
	let company = false;
	$('#company').on('click', () => {
		if(company) {
			$('#companyInfo').css('display', 'none');
			company = false;
		} else {
			company = true;
			$('#companyInfo').css('display', 'block');
		}

	});

	submitButton.on('click', (e) => {
		e.preventDefault();
		let username = $('#username').val();
		let email = $('#email').val();
		let password = $('#password').val();
		let confirmPass = $('#confirm-password').val();

		if(company) {
			let companyInfo = $('#companyNumber').val();
			checkCompanyNumber(companyInfo);
		}
		checkUsername(username);
		checkPassword(password, confirmPass);
		checkEmail(email);

		let errors = $('.false-value').length;
		$('.false-value').css("border-color", "red");
		$('.true-value').css("border-color", "darkblue");
		if(errors === 0) {
			$('#valid').css('display', 'block');
		} else {
			$('#valid').css("display", "none");
		}
		

	});

	function checkUsername(username) {
		let regex = /^[A-Za-z0-9]*$/g;
		if((username.length > 2 && username.length < 21 && regex.test(username))) {
			setTrueClass('#username');
		} else {
			setFalseClass('#username');
			
			
		}
	}

	function checkPassword(password, confirmPass) {
		if(password !== confirmPass) {
			setFalseClass('#password');
			setFalseClass('#confirm-password');
			
		} else {
			if(password.length > 4 && password.length < 16) {
				setTrueClass('#password');
				setTrueClass('#confirm-password');
			} else {
				setFalseClass('#password');
				setFalseClass('#confirm-password');
			}
		}
	}

	function checkEmail(email) {
		let regex = /[\w\d]*@[\w\d]*\./g;
		if(regex.test(email)) {
			setTrueClass('#email');
		} else {
			setFalseClass('#email');
		}
	}

	function checkCompanyNumber(companyInfo) {
		if(+companyInfo > 999 && +companyInfo < 10000) {
			setTrueClass('#companyNumber')
		} else {
			setFalseClass('#companyNumber');
		}
	}

	function setFalseClass(selector) {
		$(selector).addClass('false-value');
	}

	function setTrueClass(selector) {
		$(selector).addClass('true-value');
	}
}
