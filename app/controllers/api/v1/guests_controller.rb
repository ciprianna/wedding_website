class Api::V1::GuestsController < Api::V1::BaseController
  def show
    guest = Guests.find(params[:id])

    render(json: Api::V1::GuestsSerializer.new(guest).to_json)
  end
end
