class Api::SessionsController < ApplicationController

    def create
        user = user.find_by_credentials([:user][:username],[:user][:password])
        if user 
            login(user)
            rediret_to '/'
        else 
            render json: ["Invalid Credentials"]
        end 
    end 

    def destroy 
        logout!
        render json: {}
        # Render a 404 message if there is no current_user to logout.
    end

end