class Api::LikesController < ApplicationController

    before_action :require_logged_in

    def create 
        # debugger
        @like = current_user.likes.new(like_params)

        if @like.save 
            render :show 
        else 
            render json: @like, status: :unprocessable_entity 
        end 

    end 

    def show
        @like = Like.find(params[:id])
        render :show #optional?
    end

    def index 
        # @likes = Like.all
        # debugger
        if params[:postId] # get likes by post
            @likes = Like.where(:likeable_id => params[:postId])
            render :index
        elsif params[:userId] # get likes by User
            @likes = Like.where(:user_id => params[:userId]) #to only return likes for that user to see
        # for the like counter I will need to return for all users
            render :index
        else  # for some reason get the rest of the likes
            @likes = Like.all 
            render :index 
        end
    end

    def destroy
        @like = Like.find(params[:id])
        
        if @like.destroy
            render :show 
        else  
            render json: @like.errors.full_messages, status: 422
        end
    end

    private

    def like_params
        params.require(:like).permit(:likeable_type, :likeable_id, :user_id)
    end

end



