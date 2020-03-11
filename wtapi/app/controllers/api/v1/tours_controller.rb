class Api::V1::ToursController < ApiController
    skip_before_action :authenticate_user!, only: [:index, :show]
    # skip_before_action :authenticate_api_v1_user!, only: [:index, :show]
    before_action :set_tour, only: [:show, :update, :destroy]
    # before_action :set_tour, only: [:update, :destroy]

    def index
        p params[:user_id]
        if params[:user_id].nil?
            @tours = Tour.all
            render json: @tours, :include => {:user => {:only => [:name, :avatar_url]}}, status: :ok
        else
            @tours = Tour.where(user_id: params[:user_id])
            render json: @tours, status: :ok
        end
    end

    def show
        begin
            render json: @tour, :include => {:user => {:only => [:name, :avatar_url]}}, status: :ok
        rescue ActiveRecord::RecordNotFound
            render json: {
                message: "Tour not found with that ID"
            }, status: 404
  
        rescue StandardError => e
            render json: {
                message: e.to_s
            }, status: 500
        end
    end

    def create
        tour = Tour.new(tour_params)
        if tour.save 
            render json: {
                message: "ok",
                tour: tour
            }
        else 
            render json: {
                message: tour.errors
            }, status: 500
        end
    end

    def update 
        if @tour.update(tour_params)
            render json: {
                message: "ok",
                tour: @tour
            }, status: :ok
        else 
            render json: {
                message: @tour.errors
            }, status: 500
        end
    end
  
    def destroy
        @tour.destroy
        render json: {
            message: "ok"
        }, status: :ok
    end
    
    private 
  
    def set_tour
        @tour = Tour.find(params[:id])
    end

    def tour_params
      params.permit(:name, :description, :img_url, :user_id)
      .with_defaults(user_id: current_user.id)
    end


end
