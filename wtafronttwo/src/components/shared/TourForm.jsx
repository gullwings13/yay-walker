import React from 'react'

export default function TourForm(props)
{
    return (
        <React.Fragment>
            <div>{props.formType}</div>
            <form method="post" onSubmit={props.handleSubmit}>
                <label>
                    Name
                <input type="text" name="name" onChange={props.handleChange} value={props.formData.name} />
                </label>
                <label>
                    Description
                <input type="text" name="description" onChange={props.handleChange} value={props.formData.description} />
                </label>
                <label>
                    Image_URL
                <input type="text" name="img_url" onChange={props.handleChange} value={props.formData.img_url} />
                </label>

                <button type="submit">{props.formButtonText}</button>
            </form>
        </React.Fragment>
    )
}