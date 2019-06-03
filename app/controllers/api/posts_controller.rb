class Api::PostsController < ApplicationController
    before_action :require_logged_in

    def create 
        @post = current_user.posts.new(post_params)

        if @post.save
            render :show
        else  
            render json: @post, status: :unprocessable_entity #or status: 422
        end 
    end 

    def index
        @posts = Post.all 
    end

    def show 
        @post = Post.find(params[:id])
    end

    def update 
        @post = Post.find(params[:id])

        if @post.update(post_params)
            render :show
        else 
            render json: @post, status: :unprocessable_entity #or status: 422
        end
    end

    def destroy
        @post = Post.find(params[:id])
        
        if @post.destroy
            render :show 
        else  
            render json: @post.errors.full_messages, status: 422
        end
    end

    private 
    # need to add delete in this controller, to remove posts
    def post_params
        params.require(:post).permit(:caption, :author_id)
    end 

end
