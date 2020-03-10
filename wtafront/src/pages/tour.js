import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from "gatsby"

const Tour = ({ data }) =>
{
    console.log(data)
    return (
        <div>
            {data.tours.name}
            {data.tours.description}
            <img src={data.tours.img_url} alt="" srcset="" />
        </div>
    )
}

// Tour.propTypes = {
// }

export const query = graphql`
  query($tourId: Int) {
        tours(id__normalized: { eq: $tourId }) {
            name
            description
            img_url 
        }
    }
`



export default Tour
