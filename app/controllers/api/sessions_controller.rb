class Api::SessionsController < ApplicationController

    # POST /login route
    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            # debugger
            render json: {errors: ['Invalid username or password.'] }, status: :unauthorized
        end
    end
        # DELETE /logout route
        def destroy
             session[:user_id]
                session.delete(:user_id)
                head :no_content
            # else
            #     render json: {errors: ["You are not logged in."]}, status: :unauthorized
            # end
        end
    
end