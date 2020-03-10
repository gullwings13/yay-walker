import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import TourCardBig from './tourCardBig'

const APIURL = "http://localhost:3000"


const TourList = () =>
{
    const [tours, setTours] = useState([])

    useEffect(() =>
    {
        getTours()
    }, [])

    const getTours = async () =>
    {
        let response = await axios(APIURL + "/api/v1/tours")
        setTours(response.data)
    }

    const mapTours = () =>
    {
        return (
            <div className="flex flex-wrap w-full">
                {tours.map((tour, index) => (
                    <TourCardBig tour={tour} key={index} />
                ))}
            </div>
        )
    }

    return (
        <div>
            {mapTours()}
        </div>
    )
}

export default TourList
