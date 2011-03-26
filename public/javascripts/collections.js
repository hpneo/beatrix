var ProjectCollection = Backbone.Collection.extend({
	model: Project
});

var Tasks = Backbone.Collection.extend({
	model: Task,
	url: "http://localhost:4567/tasks"
});