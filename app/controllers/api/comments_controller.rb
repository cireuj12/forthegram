class Api::CommentsController < ApplicationController

    before_action :require_logged_in

    def create 
        # debugger
        @comment = current_user.comments.new(comment_params)
        #not using current_user
        # debugger
        if @comment.save 
            render :show #change

        else  
            render json: @comment, status: :unprocessable_entity
        end  
    end  

    def index 
        if params[:postId] 
            @comments = Comment.where(:post_id => params[:postId])
            render :index 
        else 
            @comments = Comment.all 
            render :index
        end
    end 

    def destroy
        # @comment = Comment.find(params[:id])
        @comment = current_user.comments.find(params[:id])
        if @comment.destroy
            render :show 
        else  
            render json: @comment.errors.full_messages, status: 422
        end
        
    end


    private 

    def comment_params
        # debugger
        params.require(:comment).permit(:body, :post_id)
    end

end