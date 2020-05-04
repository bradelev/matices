jQuery(document).ready(function(){

	jQuery(".ie").load("js/ie.html"); // Load the IE warning into a div with a class of ie
	
	// Contact form
	jQuery("form#contactform").submit(function(e) {
		
		// Setup any needed variables
		var input_name = jQuery('#name').val(),
		input_email    = jQuery('#email').val(),
		input_subject  = jQuery('#subject').val(),
		input_message  = jQuery('#message').val(),
		response_text  = jQuery('#response');
		
		// Hide any previous response text
		response_text.hide();

		// Change response text to 'loading...'
		response_text.html('Loading...').show();

		// Make AJAX request
		jQuery.post('sendmail.php', {name: input_name, email: input_email, subject: input_subject, message: input_message}, function(data){
			response_text.html(data);
		});

		// Cancel default action
		return false;
		
	});
	
});