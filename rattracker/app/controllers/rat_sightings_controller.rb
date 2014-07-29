class RatSightingsController < ApplicationController

def index
end

def show
end

def create
  @rat_sightings = RatSighting.zip_specific_sightings(rat_sighting_params[:zip])
  render 'rat_sightings/show.html'
end


private

  # Never trust parameters from the scary internet, only allow the white list through.
  def rat_sighting_params
    params.require(:rat_sightings).permit(:zip)
  end

end
