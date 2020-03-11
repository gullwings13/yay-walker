import React from 'react'

export default function TourForm(props)
{
    return (
        <React.Fragment>
            <div>{props.formType}</div>
            <form method="post" onSubmit={props.handleSubmit}>
                <label>
                    Name
                <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        type="text" name="name" onChange={props.handleChange} value={props.formData.name} />
                </label>
                <label>
                    Description
                <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        type="text" name="description" onChange={props.handleChange} value={props.formData.description} />
                </label>
                <label>
                    Image_URL
                <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                        type="text" name="img_url" onChange={props.handleChange} value={props.formData.img_url} />
                </label>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">{props.formButtonText}</button>
            </form>
        </React.Fragment>
    )
}