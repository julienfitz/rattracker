class RatSightingController < ApplicationController

def index
    @rat_sightings = RatSighting.all
end

def show
    @rat_sightings = RatSighting.all
end


 private
    
    def set_rat_sighting
      @rat_sighting = RatSighting.find(params[:zip])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def rat_sighting_params
      params.require(:rat_sightings).permit(:zip)
    end


end
