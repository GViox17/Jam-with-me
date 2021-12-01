class Api::UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end
    # GET /me
    def show
        current_user = User.find_by(id: session[:user_id])
        current_user
            render json: current_user, status: :ok
        # else
        #     render json: {error: "Not currently Logged in"}, status: :unauthorized
        # end
    end

    # POST /signup
    def create
        user = User.create!(user_params)
        instruments = Instrument.find_or_create_by(name: params[:instruments])
        user.instruments << instruments
        if user.valid?
            session[:user_id] ||= user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update 
        user = User.find_by(params[:id])
        user.update(user_params)
        render json: user, status: :ok
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    private

    def user_params
        params.require(:user).permit(
          :first_name,
          :last_name,
          :username,
          :location,
          :password,
          :password_confirmation,
          :image_url,
          :instruments
         
        )
    end
    
end
