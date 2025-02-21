import React from 'react'
import { Link } from 'react-router-dom'

const TourCardBig = (props) =>
{
    const { tour } = props

    return (
        <Link className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-1 md:p-3 max-w-xs font-sans text-gray-400" to={`/tours/${tour.id}`}>
            <div className=" rounded-sm shadow-lg bg-gray-900 rounded-bl-xl">
                <div>
                    <img className="rounded-t-sm object-cover object-center w-full h-32 md:h-32" src={props.tour.img_url} alt="tour" />
                </div>
                <div className="truncate px-3 text-sm">
                    {props.tour.name}
                </div>
                <div className="flex items-center bg-gray-700 rounded-br-sm rounded-l-full">
                    <div className="bg-gray-600 rounded-full">
                        <img className="border shadow rounded-full w-8" src={props.tour.user.avatar_url} alt="Avatar" />
                    </div>
                    <div className=" pl-1 text-xs">{props.tour.user.name}</div>
                    <div><div className=" pl-1 text-xs">4 <span className="hover:text-red-600">♥</span></div></div>
                </div>
            </div>
        </Link>
    )
}

TourCardBig.propTypes = {

}

export default TourCardBig

