var IndexView = Backbone.View.extend({
	initialize:function(){
		this.model = this.options.model;
	},
	render: function(){
		$('#body').empty();
		$('#indexTmpl').tmpl().appendTo($('#body'));
		$('#projectIndexTmpl').tmpl(this.model).appendTo($('#projects'));
	}
});

var ProjectView = Backbone.View.extend({
	initialize:function(){
		this.model = this.options.model;
	},
	render: function(){
		$('#body').empty();
		$('#projectTmpl').tmpl(this.model).appendTo($('#body'));
		$('#storyItemTmpl').tmpl(this.model.attributes.stories).appendTo($('#stories'));
	}
});

var StoryView = Backbone.View.extend({
	initialize: function(){
		this.model = this.options.model;
	},
	render: function(){
		$('#body').empty();
		$('#storyTmpl').tmpl(this.model).appendTo($('#body'));
		$('#taskTmpl').tmpl(this.model.attributes.tasks).appendTo($('#tasks'));
	}
});