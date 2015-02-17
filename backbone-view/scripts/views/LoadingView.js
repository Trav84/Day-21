var LoadingView = Backbone.View.extend({
	el: '#loading-screen',

	initialize: function(options) {
		
		setTimeout(function() {
			options.router.navigate('menu', {trigger: true});
		}, 4000);
	}

});