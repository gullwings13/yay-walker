import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

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
            <div> Tours:
                {tours.map((tour, index) => (
                <div key={index}>
                    {console.log(tour)}
                    <div>{tour.name}</div>
                    <div style={{ width: "100px" }}><img src={tour.img_url} alt="tour" /></div>
                    <div></div>
                </div>
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
