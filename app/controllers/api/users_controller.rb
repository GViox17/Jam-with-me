class Api::UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end 

    # GET /me
    def show
        current_user = User.find_by(id: session[:user_id])
        if current_user
            render json: current_user, status: :ok
            else
                render json: {error: "Not currently Logged in"}, status: :unauthorized
            end

    end

    # Update /me
    def update
        user = User.find(params[:id])
        user.update(user_params)
        render json: user, status: :ok
    end

    # Delete /me
    # def destroy
    #     dog = User.find(params[:id])
    #     user.destroy
    #     head :no_content
    # end

    # POST /signup
    def create
        # byebug
        user = User.create(user_params)
        if user.valid?
            instruments = Instrument.find_or_create_by(name: params[:instruments])
            user.instruments << instruments
            session[:user_id] ||= user.id
            render json: user, status: :created
        else
            render json: { errors: "Information Invalid" }, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.permit(
          :first_name,
          :last_name,
          :username,
          :location,
          :password,
          :password_confirmation,
          :image_url,
          :bio
        #   :instruments
        #   :user
         
        )
    end
    
end