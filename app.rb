require 'rubygems'
require 'sinatra'
require "sinatra/reloader"

require 'erb'
require 'json'

require 'helpers'

Dir.glob("models/*.rb*").each {|file| require file}

get '/' do
	@projects = Project.all
	erb :index
end

get '/projects' do
	content_type :json
	projects = Project.all
	projects.to_json
end

get '/projects/:project' do
	content_type :json
	project = Project.find(params[:project])
	project.attributes['stories'] = project.set_stories
	project.to_json
end

get '/projects/:project/stories' do
	content_type :json
	project = Project.find(params[:project])
	project.set_stories.to_json
end

get '/projects/:project/stories/:story' do
	content_type :json
	story = Story.find(params[:story], :params => {:project_id => params[:project]})
	story.attributes['project'] = params[:project]
	story.attributes['tasks'] = story.set_tasks
	story.to_json
end

get '/projects/:project/stories/:story/tasks' do
	content_type :json
	story = Story.find(params[:story], :params => {:project_id => params[:project]})
	story.set_tasks.to_json
end