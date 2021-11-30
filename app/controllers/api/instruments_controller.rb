class Api::InstrumentsController < ApplicationController
    # before_action :authorize

    def index
        instrument = Instrument.all
        render json: instrument
    end

    def create
        new_instrument = Instrument.new(instrument_params)
        if new_instrument.save
        render json: new_instrument, status: :created
        else  
            render json:  {error: 'Invalid Instrument!'}, status: :unprocessable_entity
        end
    end
    
    # def update 
    #     instrument = Instrument.find(params[:id])
    #     instrument.update(instrument_params)
    #     render json: instrument, status: :ok
    # end

    # def destroy
    #     instrument = Instrument.find(params[:id])
    #     instrument.destroy
    #     head :no_content
    # end

    private
    def instrument_params
        params.permit(
            :name
        )
    end

    # def authorize
    #     if !session[:user_id]
    #         render json: {error: "please log in or create an account"}, status: :unauthorized
    #     end
    # end
end
