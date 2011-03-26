require 'active_resource'

class Task < ActiveResource::Base
	
	self.site = "http://www.pivotaltracker.com/services/v3/projects/:project_id/stories/:story_id"
	self.headers['X-TrackerToken'] = '3fa226bc048021e8467040561f403381'
end