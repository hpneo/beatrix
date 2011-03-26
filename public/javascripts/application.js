var Project = Backbone.Model.extend({});

var Projects = Backbone.Collection.extend({
	model: Project,
	url: "http://localhost:4567/projects"
});

var projects = new Projects;