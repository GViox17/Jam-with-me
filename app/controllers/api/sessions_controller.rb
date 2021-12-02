class Api::SessionsController < ApplicationController

    # POST /login route
    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:username] = user.username
            render json: user, status: :created 
        # else
        #     render json: {errors: ['Invalid username or password.'] }, status: :unauthorized
        end
    end
        # DELETE /logout route
        def destroy
             session[:username]
                session.destroy
                head :no_content
            # else
            #     render json: {errors: ["You are not logged in."]}, status: :unauthorized
            # end
        end
    
end