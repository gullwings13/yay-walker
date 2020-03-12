import React from 'react'
import { Link } from 'react-router-dom'

const TourCardBig = (props) =>
{
    const { tour } = props

    return (
        <Link className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-1 md:p-3 max-w-xs" to={`/tours/${tour.id}`}>
            <div className="rounded-lg shadow bg-gray-500">
                <div>
                    <img className="rounded-t-lg object-cover object-center w-full h-32 md:h-32" src={props.tour.img_url} alt="tour" />
                </div>
                <div className="truncate">
                    <span>{props.tour.name}</span>
                </div>
                <div className="flex bg-gray-600 rounded-b-lg">
                    <div className="bg-red-600 rounded-full">
                        <img className="rounded-full w-16" src={props.tour.user.avatar_url} alt="Avatar" />
                    </div>
                    <div className="">{props.tour.user.name}</div>
                </div>
            </div>
        </Link>
    )
}

TourCardBig.propTypes = {

}

export default TourCardBig
