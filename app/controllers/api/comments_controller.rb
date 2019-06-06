class Api:CommentsController < ApplicatonController

    before_action :require_logged_in

    def create 
        @comment = current_user.comments.new(comment_params)

        if @comment.save 
            render :show #change

        else  
            render json: @comment, status: :unprocessable_entity
        end  
    end  

    def index 
        @comments = Comment.all 
        render :index
    end 


    private 

    def comment_params 
        params.require(:comment).permit(:body)
    end

end