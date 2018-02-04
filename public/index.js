function submitForm() {
	$('.registrationForm').on('submit', function (event) {
		event.preventDefault();

		const fName = $('#firstName').val();
		const lName = $('#lastName').val();
		const email = $('#email').val();
		const pword = $('#password').val();

		const settings = {
    		url: 'http://localhost:8080/demo',
    		data: JSON.stringify({
    			firstName: fName,
    			lastName: lName,
    			email: email,
    			password: pword
    			}),
    		dataType: 'json',
    		contentType: 'application/json',
    		type: 'POST',
            failure: function(error) {
                console.log(error);
            },
    		success: function(response) {
    			console.log(response.body.userId)
    		}
    		}

        // Make call to API with ajax
        $.ajax(settings);
	})
}

$(submitForm);