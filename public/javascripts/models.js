var Project = Backbone.Model.extend({
	initialize: function(){
		var self = this;
		this.attributes.stories = this.attributes.stories.map(function(story){
			story = story.story;
			story.project = self.attributes.id;
			return story;
		});
	},
	get: function(attr){
		return this.data.attributes[attr];
	}
});

var Story = Backbone.Model.extend({
	initialize: function(){
		console.log(this);
		var self = this;
		this.attributes.tasks = this.attributes.tasks.map(function(task){
			task = task.task;
			task.story = self.attributes.id;
			return task;
		});
	},
	get: function(attr){
		return this.data.attributes[attr];
	}
});

var Task = Backbone.Model.extend({});