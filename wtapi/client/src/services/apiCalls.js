import { api } from './auth'

const tryCatchAPICall = async (methodString, urlString, data = null) =>
{
    // console.log(urlString + " " + data)
    try
    {
        let response = await api({ method: methodString, url: urlString, data: data })
        return response
    }
    catch (error)
    {
        console.log(error)
    }
}

export const getAllTours = async () =>
{
    let response = await tryCatchAPICall("GET", "/tours")
    return response
}

export const getTour = async (tourId) =>
{
    let response = await tryCatchAPICall("GET", `/tours/${tourId}`)
    return response
}

export const newTour = async (newTour) =>
{
    let response = await tryCatchAPICall("POST", `/tours/`, newTour)
    return response
}

export const newPoint = async (tourId, newPoint) =>
{
    let response = await tryCatchAPICall("POST", `/tours/${tourId}/points`, newPoint)
    console.log(response)
    return response
}

export const getUser = async (userId) =>
{
    let response = await tryCatchAPICall("GET", `/users/${userId}`)
    return response
}

export const getProfile = async () =>
{
    let response = await tryCatchAPICall("GET", `/profile`)
    return response
}

export const getPoint = async (pointId) =>
{
    let response = await tryCatchAPICall("GET", `/points/${pointId}`)
    return response
}

export const updatePoint = async (tourId, pointId, editedPoint) =>
{
    // console.log(pointId)
    let response = await tryCatchAPICall("PUT", `/tours/${tourId}/points/${pointId}`, editedPoint)

    return response
}

export const updateTour = async (tourId, editedTour) =>
{
    let response = await tryCatchAPICall("PUT", `/tours/${tourId}`, editedTour)
    return response
}
