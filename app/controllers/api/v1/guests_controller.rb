class Api::V1::GuestsController < Api::V1::BaseController
  include ActiveHashRelation

  def show
    guest = Guests.find(params[:id])

    render(json: Api::V1::GuestsSerializer.new(guest).to_json)
  end

  def index
  guests = Guests.all

  guests = apply_filters(guests, params)

  render(
    json: ActiveModel::ArraySerializer.new(
      guests,
      each_serializer: Api::V1::GuestsSerializer,
      root: 'guests',
    )
  )
end
end
