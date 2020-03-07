class Api::V1::UsersController < ApiController
    skip_before_action :authenticate_user!, only: [:index, :show]
    before_action :set_user, only: [:show, :update, :destroy]
    
    def index
        @users = User.all
        render json: @users
    end

    # def show
    #     @user = User.find(params[:id])
    #     render json: @user, include: :tours
    # end

    # def update
    #     @user = User.find(params[:id])

    #     render json: @user
    # end

    # def destroy
    #     @user = User.find(params[:id])
        
    #     render json: @user
    # end

    def show 
        begin
            render json: @user, include: :tours, status: :ok
            
        rescue ActiveRecord::RecordNotFound
            render json: {
                message: "User not found with that ID"
            }, status: 404
  
        rescue StandardError => e
            render json: {
                message: e.to_s
            }, status: 500
        end
    end

    def update 
        if @user.update(user_params)
            render json: {
                message: "ok",
                teacher: @user
            }
        else 
            render json: {
                message: @user.errors
            }, status: 500
        end
    end
  
    def destroy
        @user.destroy
        render json: {
            message: "ok"
        }
    end
    
    private 
  
    def set_user 
        @user = User.find(params[:id])
    end
  
    def user_params
      params.permit(:name, :bio, :avatar_url)
    end
end