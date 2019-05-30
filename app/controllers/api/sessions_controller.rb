class Api::SessionsController < ApplicationController

    def create 
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
        
        if @user 
            login(@user)
            render "api/users/show"
        else  
            render json: ["Sorry, your password was incorrect. Please double-check your password."], status: 401
        end 
    end 

    def destroy
        logout!
        render json: {message: 'Logout Succesful.'}
    end

end