$('.deleteForm').on('submit', function (event) {
	event.preventDefault();
	const id = localStorage.getItem('userId');

	const settings = {
		url: `http://localhost:8080/demo/${id}`,
		dataType: 'json',
		contentType: 'application/json',
		type: 'DELETE',
        error: function(error) {
            console.log(error);
        },
		success: function(response) {
			console.log(response);
            window.location = 'success.html';
		}
		}

    // Make call to API with ajax
    $.ajax(settings);
})

$('.updateEmailForm').on('submit', function (event) {
	event.preventDefault();
	const id = localStorage.getItem('userId');
	const newEmail = $('#email').val();

	const settings = {
		url: `http://localhost:8080/demo/${id}`,
		dataType: 'json',
		data: JSON.stringify({
    			email: newEmail,
    			}),
		contentType: 'application/json',
		type: 'PUT',
        error: function(error) {
            console.log(error);
        },
		success: function(response) {
			console.log(response);
            window.location = 'success.html';
		}
		}

    // Make call to API with ajax
    $.ajax(settings);
})