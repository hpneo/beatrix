require 'active_resource'

class Project < ActiveResource::Base
	
	self.site = "http://www.pivotaltracker.com/services/v3"
	self.headers['X-TrackerToken'] = '3fa226bc048021e8467040561f403381'
	
	def set_stories
		Story.find(:all, :params => {:project_id => self.id})
	end
end