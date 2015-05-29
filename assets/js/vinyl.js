$( document ).ready(function() {
	$('img').addClass('ui image')
  $('#navigation-toggle').click(function() {
    $('#navigation').sidebar('toggle')
  })
})