import { api } from './auth'

const tryCatchAPICall = async (methodString, urlString, data = null) =>
{
    console.log(data)
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


