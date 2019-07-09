class Api::FollowsController < ApplicationController
    
    before_action :require_logged_in


    def create 

        @follow = current_user.follows.new(follow_params)

        if @follow.save
            render :show
        else  
            render json: @follow, status: :unprocessable_entity
        end 
    end  


    def index
        #followers of userId in question
        # debugger
        if params[:userId]
            @follows = Follow.where(:following_id => params[:userId])
            # debugger
            render :index
        else 
            @follows = Follow.all
            render :index
        end
        #all the users the current user follows is a sep ajax pull
    end

    def destroy
        #where in the user follows, current_user is a follower
        # need to pass in a user Id
        # user = User.find(params[:userId])
        @follow = current_user.follows.find(params[:id])
        
        if @follow.destroy
            render :index
        else 
            render json: @follow.errors.full_messages, status: 422
        end 
    end

    private 

    def follow_params 

        params.require(:follow).permit(:follower_id, :following_id)

    end

end
    