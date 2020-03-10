import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const TourCardBig = props =>
{
    const {tour} = props
    
    
    return (
        <Link className="w-1/3 p-3" to={`/users/${tour.user_id}/tours/${tour.id}`}>
            <div className="rounded-lg shadow bg-gray-500">
                <div>
                    <img className="rounded-t-lg" src={props.tour.img_url} alt="tour" />
                </div>
                <div className="truncate">
                    <span>{props.tour.name}</span>
                </div>
                <div className="flex bg-gray-600 rounded-b-lg">
                    <div className="bg-red-600 rounded-full">
                        <img className="rounded-full w-16" src={props.tour.user.avatar_url} />
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
