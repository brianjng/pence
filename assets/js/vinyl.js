$( document ).ready(function() {
	$('img').addClass('img-responsive')

	$('.tags a').each(function() {
		$(this).addClass('btn btn-sm btn-default')
			.prepend('<i class="fa fa-tag"></i> ')
	})

	$('a.older-posts').addClass('pull-right btn btn-default')
	$('a.newer-posts').addClass('pull-left btn btn-default')
})