import React from 'react'

export default function PointForm(props)
{
    return (
        <React.Fragment>
            
            {/* <form method="post" onSubmit={props.handleSubmit}>
                <label>
                    Name
                <input type="text" name="name" onChange={props.handleUpdate} />
                </label>
                <label>
                    Description
                <input type="text" name="description" onChange={props.handleUpdate} />
                </label>
                <label>
                    Image_URL
                <input type="text" name="img_url" onChange={props.handleUpdate} />
                </label>

                
            </form> */}

            <div>{props.formType}</div>
            <form method="post" onSubmit={this.handleSubmit}>
                <label>
                    Lat
                            <input type="text" name="lat" onChange={this.handleUpdate} />
                </label>
                <label>
                    Long
                            <input type="text" name="long" onChange={this.handleUpdate} />
                </label>
                <label>
                    Text
                            <input type="text" name="text" onChange={this.handleUpdate} />
                </label>
                <label>
                    Picture URL
                            <input type="text" name="picture_url" onChange={this.handleUpdate} />
                </label>
                <button type="submit">{props.formButtonText}</button>
            </form>
        </React.Fragment>
    )
}
