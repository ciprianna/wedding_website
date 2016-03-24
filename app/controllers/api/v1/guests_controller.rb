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

  def new
   @guest = Guests.new
  end

  def create
     @guest = Guests.new(guest_params)
     if @guest.save
      #  @guest.send_activation_email
      #  flash[:info] = "Please check your email to activate your account."
      #  #flash[:info] = "You account has been activated, no need to check your mails."
       redirect_to home_path
     else
       redirect_to home_path
     end
   end

   def edit
   end

   def update
     if @guest.update_attributes(guest_params)
      #  flash[:success] = "Profile updated"
       redirect_to home_path
     else
       redirect_to home_path
     end
   end

   def destroy
     Guests.find(params[:id]).destroy
    #  flash[:success] = "User deleted"
     redirect_to home_path
   end

   private

     # Never trust parameters from the scary internet, only allow the white list through.
     def guest_params
       params.require(:guest).permit(:first_name, :last_name, :attending, :total_guests)
     end
end
