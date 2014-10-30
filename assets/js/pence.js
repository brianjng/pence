$( document ).ready(function() {
	$('img').addClass('img-responsive')

	$('.tags a').each(function() {
		$(this).addClass('btn btn-small btn-default')
			.prepend('<i class="fa fa-tag"></i> ')
	})
})