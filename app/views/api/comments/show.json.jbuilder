# json.comment do 
json.partial! '/api/comments/comment', comment: @comment
# end 

# if i want multiple keys then i do the do loop. It assigns a key of comment: @ comment.
# set! is a jbuilder method
# I did not need this because i am not assigning a @user at comment


# json.user do  
#     json.partial! '/api/users/user', user: @comment.user 
# end  

