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
  @rat_sighting_zips = RatSighting.zip_specific_sightings(rat_sighting_params[:zip].to_i)
  @rat_sighting_address = RatSighting.new(address: rat_sighting_params[:address])
  if @rat_sighting_address.save
    render json: @rat_sighting_address
  end
  render 'rat_sightings/show.html'
end


private

  # Never trust parameters from the scary internet, only allow the white list through.
  def rat_sighting_params
    params.require(:rat_sightings).permit(:zip, :address)
  end

end
