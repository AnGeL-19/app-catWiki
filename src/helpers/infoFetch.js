


export const getInfoCatFetch = async (url, method = 'GET') => {

    return await fetch(url,{
        method,
        headers: {
            'x-api-key': 'DEMO-API-KEY'
        }
    })

}