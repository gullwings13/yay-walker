class Api::V1::PointsController < ApiController
    skip_before_action :authenticate_user!, only: [:index, :show]
    before_action :set_point, only: [:show, :update, :destroy]
    # before_action :set_tour, only: [:update, :destroy]

    def index
        p params[:tour_id]
        if params[:tour_id].nil?
            @points = Point.all
            render json: @points, include: :tour, status: :ok
        else
            @points = Point.where(tour_id: params[:tour_id])
            render json: @points, status: :ok
        end
    end

    def show
        begin
            render json: @point, status: :ok
        rescue ActiveRecord::RecordNotFound
            render json: {
                message: "Point not found with that ID"
            }, status: 404
  
        rescue StandardError => e
            render json: {
                message: e.to_s
            }, status: 500
        end
    end

    def create
        point = Point.new(point_params)
        if point.save 
            render json: {
                message: "ok",
                point: point
            }
        else 
            render json: {
                message: point.errors
            }, status: 500
        end
    end

    def update 
        if @point.update(point_params)
            render json: {
                message: "ok",
                point: @point
            }, status: :ok
        else 
            render json: {
                message: @point.errors
            }, status: 500
        end
    end
  
    def destroy
        @point.destroy
        render json: {
            message: "ok"
        }, status: :ok
    end
    
    private 
  
    def set_point
        @point = Point.find(params[:id])
    end

    def point_params
      params.permit(:lat, :long, :text, :order, :picture_url, :tour_id)
    end
end
