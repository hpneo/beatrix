require 'active_resource'

class Story < ActiveResource::Base
	
	self.site = "http://www.pivotaltracker.com/services/v3/projects/:project_id"
	self.headers['X-TrackerToken'] = '3fa226bc048021e8467040561f403381'
	
	def set_tasks
		Task.find(:all, :params => {:project_id => self.prefix_options[:project_id], :story_id => self.id})
	end
end