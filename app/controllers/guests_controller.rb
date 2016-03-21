class GuestsController < ApplicationController
  # before_action :set_guest, only: [:show, :edit, :update, :destroy]

  # GET /guests
  # GET /guests.json
  def index
    @guests = Guest.all
  end

  # GET /guests/1
  # GET /guests/1.json
  def show
  end

  # GET /guests/new
  def new
    super
    @guest = Guest.new
  end

  # GET /guests/1/edit
  def edit
  end

  # POST /guests
  # POST /guests.json
  def create
    @guest = Guests.new(guest_params)

    if @guest.save
      redirect_to home_path, notice: 'Thank you for your response!'
    else
      redirect_to home_path, notice: "Oops, looks like we're missing something."
    end
  end

  # DELETE /guests/1
  # DELETE /guests/1.json
  def destroy
    @guest.destroy
    respond_to do |format|
      format.html { redirect_to guests_url, notice: 'Guest was successfully removed from event.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_guest
      @guests = Guest.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def guest_params
      params.require(:guest).permit(:first_name, :last_name, :attending, :total_guests)
    end
end
