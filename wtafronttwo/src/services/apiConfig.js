let apiUrl
const apiUrls = {
    production: 'https://aqueous-fortress-10362.herokuapp.com/api/v1',
    development: 'http://localhost:3000/api/v1'
}

if (window.location.hostname === 'localhost')
{
    apiUrl = apiUrls.development
} else
{
    apiUrl = apiUrls.production
}

export default apiUrl