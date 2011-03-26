var App = Backbone.Controller.extend({
	routes: {
		"": "index",
		"project/:id": "project",
		"project/:id/:story": "story"
	},
	initialize: function(){
		console.log("start");
	},
	index: function(){
		$.getJSON("/projects", function(data){
			if(data){
				new IndexView({model: data}).render();
			}
		});
	},
	project: function(id){
		$.getJSON("/projects/"+id, function(data){
			console.log(data);
			new ProjectView({model: new Project(data.project)}).render();
		});
	},
	story: function(id, story){
		$.getJSON("/projects/"+id+"/stories/"+story, function(data){
			new StoryView({model: new Story(data.story)}).render();
		});
	}
});