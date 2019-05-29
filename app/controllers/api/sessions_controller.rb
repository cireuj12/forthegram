class Api::SessionsController < ApplicationController

    def create 
        @user = User.find_by_credentials([:user][:username],[:user][:password])
        if @user 
            login(@user)
            redirect to '/'
        else  
            render json: ["Invalid Credentials!"], status: 401
        end 
    end 

    def destroy
        logout!
        render json: {message: 'Logout Succesful.'}
    end

end