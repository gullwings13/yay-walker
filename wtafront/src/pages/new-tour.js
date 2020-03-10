import React from 'react'

import axios from 'axios'
import { navigate } from 'gatsby'

class NewTour extends React.Component
{

    state = {
        name: ``,
        description: ``,
        img_url: ``
    }

    handleUpdate = event =>
    {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = async event =>
    {
        event.preventDefault()
        await this.handleCreateTour(this.state)
        navigate(`/`)
    }

    handleCreateTour = async newTour =>
    {
        const baseUrl = 'http://localhost:3000/api/v1'

        const api = axios.create({
            baseURL: baseUrl
        })

        const createTour = async (data) =>
        {
            api.defaults.headers.common.authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTU4NTAwMzA3Nn0.zV2LeOnrzOsH26PJa8aXP_85_p65RAWOXN1SfhtXc04`
            let response = await api.post('/tours', data)
            return response
        }

        // const options = {
        //     method: 'POST',
        //     headers: { 'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTU4NTAwMzA3Nn0.zV2LeOnrzOsH26PJa8aXP_85_p65RAWOXN1SfhtXc04' },
        //     data: newTour
        // }

        // let response = await axios.post('http://localhost:3000/api/v1/tours', newTour)
        let response = await createTour(newTour)

        if (response.status === 200)
        {
            console.log("Cool made a tour")
            await axios.post("https://api.netlify.com/build_hooks/5e670550a55a1405876f4a85", {})
        }
    }

    render()
    {
        return (
            <div>
                <form method="post" onSubmit={event =>
                {
                    this.handleSubmit(event)

                }}>
                    <label>
                        Name
                    <input type="text" name="name" onChange={this.handleUpdate} />
                    </label>
                    <label>
                        Description
                    <input type="text" name="description" onChange={this.handleUpdate} />
                    </label>
                    <label>
                        Image Url
                    <input type="text" name="img_url" onChange={this.handleUpdate} />
                    </label>
                    <input type="submit" value="Log In" />
                </form>
            </div>
        )
    }
}

export default NewTour
