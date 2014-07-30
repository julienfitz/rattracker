class RatSightingsController < ApplicationController

def index
  @rat_sightings = RatSighting.all
  respond_to do |format|
    format.html
    format.json {render json: @rat_sightings}
  end
end

def show
end

def create
  @rat_sighting_addresses = parseAddress(rat_sighting_params)
  render 'rat_sightings/show.html'
end


private

  def parseAddress(address)
    RatSighting.all.select do |rat_sighting|
      rat_sighting.zip == address["zip"].to_i
    end
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def rat_sighting_params
    params.require(:rat_sightings).permit(:zip, :address)
  end

end
