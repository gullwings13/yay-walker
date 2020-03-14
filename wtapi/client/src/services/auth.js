import axios from 'axios'
import apiUrl from './apiConfig'

export const api = axios.create({
    baseURL: apiUrl
})

export const isBrowser = () => typeof window !== "undefined"

export const getLoggedInUser = () =>
    (
        isBrowser() && window.localStorage.getItem("Yay!Walker")
            ? JSON.parse(window.localStorage.getItem("Yay!Walker"))
            : {}
    )

const setUser = (user) =>
{
    window.localStorage.setItem("Yay!Walker", JSON.stringify(user))
}

export const handleLogin = async ({ email, password }, callback) =>
{
    try
    {
        let response = await axios.post(`${apiUrl}/auth`, {
            email: email,
            password: password
        })

        if (response.status === 200)
        {
            api.defaults.headers.common.authorization = `Bearer ${response.data.token}`
            setUser({
                token: response.data.token,
                name: response.data.name,
                id: response.data.id,
                avatarUrl: response.data.avatarUrl
            })
            callback()
        }
        // return false
    } catch (error)
    {
        console.log(error)
    }

}

export const handleSignup = async ({ email, password }, callback) =>
{
    try
    {
        // The registration route is not name spaced inside /api/v1 and so it POSTS to /users
        let response = await axios.post(`/users/`, {
            email: email,
            password: password
        })

        if (response.status === 200)
        {
            api.defaults.headers.common.authorization = `Bearer ${response.data.token}`
            setUser({
                token: response.data.token,
                name: response.data.name,
                id: response.data.id,
                avatarUrl: response.data.avatarUrl
            })
            callback()
        }
        // return false
    } catch (error)
    {
        console.log(error)
    }

}

export const isLoggedIn = () =>
{
    const user = getLoggedInUser()
    api.defaults.headers.common.authorization = `Bearer ${user.token}`
    return !!user.token
}

export const logout = async callback =>
{
    await setUser({})
    api.defaults.headers.common.authorization = ""
    callback()
}