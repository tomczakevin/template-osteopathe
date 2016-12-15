(function($){
	$.fn.Center= function(){
		this.css({
			'position' : 'fixed',
			'top' : '50%'
		});
		this.css({
			'margin-top' : -this.height()/2 + 'px'
		})
	};
})(jQuery);

$(document).ready(function(){
	$('#log').Center();
});