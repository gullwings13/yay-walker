import axios from 'axios'

export const isBrowser = () => typeof window !== "undefined"
export const getUser = () =>
    isBrowser() && window.localStorage.getItem("Yay!Walker")
        ? JSON.parse(window.localStorage.getItem("Yay!Walker"))
        : {}
const setUser = user =>
    window.localStorage.setItem("Yay!Walker", JSON.stringify(user))

export const handleLogin = async ({ email, password }) =>
{
    try
    {
        //let response = await axios.post('http://localhost:3000/api/v1/auth', {
        let response = await axios.post("https://aqueous-fortress-10362.herokuapp.com/api/v1/auth", {
            email: email,
            password: password
        })

        if (response.status === 200)
        {
            return setUser({
                token: response.data.token,
                name: response.data.name,
                avatarUrl: response.data.avatarUrl
            })
        }
        return false
    } catch (error)
    {
        console.log(error)
    }

}
export const isLoggedIn = () =>
{
    const user = getUser()
    return !!user.token
}
export const logout = async callback =>
{
    await setUser({})
    callback()
}