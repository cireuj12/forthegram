class Api::PostsController < ApplicationController
    before_action :require_logged_in

    def create 
        @post = current_user.posts.new(post_params) #current_user.posts #Post.new
        # @post = Post.new(post_params)
        # @post.author_id = current_user.id
        if @post.save
            render json: {message: "You did it!"} # this is not even rendering
            # render :show
        else  
            render json: @post.errors.full_messages, status: 422 #or status: 422
        end 
    end 

    def index #is this even being used?
        @posts = Post.all.with_attached_photo #with_attached_photo prevents a n+1 query.
        render :index #optional? render @posts?
    end

    def show 
        @post = Post.find(params[:id])
        render :show #optional?
    end

    def update 
        @post = Post.find(params[:id])
        if @post.update(post_params)
            render :show
        else 
            render json: @post.errors.full_messages, status: 422 #or status: 422
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
        params.require(:post).permit(:caption, :photo) #author_id not working :author_id
    end 

end

#How do I use author_id and current_user.posts
