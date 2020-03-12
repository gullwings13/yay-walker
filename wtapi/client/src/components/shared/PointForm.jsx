import React from 'react'

export default function PointForm(props)
{
    // console.log(props.formData)
    return (
        <React.Fragment>
            <div>{props.formType}</div>
            <form method="post" onSubmit={props.handleSubmit}>
                <label>
                    Lat
                            <input
                        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        placeholder="90.0" type="text" name="lat" onChange={props.handleChange} value={props.formData.lat} />

                </label>
                <label>
                    Long
                            <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        placeholder="-47.0"
                        type="text" name="long" onChange={props.handleChange} value={props.formData.long} />
                </label>
                <label>
                    Text
                            <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        placeholder="Description"
                        type="text" name="text" onChange={props.handleChange} value={props.formData.text} />
                </label>
                <label>
                    Picture URL
                            <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        placeholder="http://picture.com/full/url"
                        type="text" name="picture_url" onChange={props.handleChange} value={props.formData.picture_url} />
                </label>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{props.formButtonText}</button>
            </form>
        </React.Fragment>
    )
}
