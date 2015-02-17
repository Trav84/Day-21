var AppView = Backbone.View.extend({

	el: '#app-view',
	initialize: function() {
		//this.gameCollection = new GameCollection();

		var self = this;

		var Router = Backbone.Router.extend({
			routes: {
				'loading': 'loading',
				'menu': 'menu',
				'game': 'game',
				'leaderboard': 'leaderboard',
				'settings': 'settings',
				'*path':  'loading'
			},

			loading: function() {
				console.log('loading screen');
				self.hideAllPages();
				self.loadingView.$el.show();
			},

			menu: function() {
				console.log('Menu screen');
				self.hideAllPages();
				self.menuView.$el.show();
			},

			game: function() {
				console.log('Game screen');
				self.hideAllPages();
				self.gameView.$el.show();
			},

			leaderboard: function() {
				console.log('Leaderboard screen');
				self.hideAllPages();
				self.leaderboardView.$el.show();
			},

			settings: function() {
				console.log('Settings screen');
				self.hideAllPages();
				self.settingsView.$el.show();
			}
		});

		var appRouter = new Router();

		this.loadingView = new LoadingView({router: appRouter});
		this.menuView = new MenuView();
		this.gameView = new GameView({router: appRouter});
		this.leaderboardView = new LeaderboardView({router: appRouter});
		this.settingsView = new SettingsView({router: appRouter});

		Backbone.history.start();
	},

	hideAllPages: function() {
		$('.page-view').hide();
	}

});

