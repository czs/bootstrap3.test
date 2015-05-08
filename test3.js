jQuery(document).ready(function($) {
	$('.ts-alert').on('closed.bs.alert', function(){
		alert("closed bs alert")
	});

	$('.ts-btn').click(function(){
		var $btn = $(this).button('loading');

		setTimeout(function(){$btn.button('reset')}, 3000);
	})
});