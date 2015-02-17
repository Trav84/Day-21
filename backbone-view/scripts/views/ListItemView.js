var ListItemView = Backbone.View.extend({

	initialize: function () {

		_.bindAll(
			this,
			'onCheckBoxClicked',
			'onModelChanged'
		);

		var listItemTemplate = _.template($('#template').html());
		this.$el = $(listItemTemplate(this.model.attributes));

		this.$textBox = $('#text-input-box');
		this.$displayList = $('#display-list');
		this.$checkBox = $(this.$el.find('.item-check-box'));

		this.$checkBox.on('click', this.onCheckBoxClicked);
		this.model.on('change', this.onModelChanged);

	},

	onCheckBoxClicked: function() {
		if(this.model.get('completed')) {
			this.model.set({
				completed: false
			});
		} else {
			this.model.set({
				completed: true
			});
		}
	},

	onModelChanged: function() {
		this.$el.toggleClass('item-check-box-striked');
	}

});