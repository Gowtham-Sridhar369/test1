$(document).ready(function() {
	
	var $modal = $('#elementalCTAModal');
	$('body').on('click', '.modal-form-trigger', function(e) {
		e.preventDefault();
		var $trigger = $(this);
		$.ajax($trigger.attr('href')).done(function(resp) {
			$modal.html(resp).foundation('open');
		});
	});

});