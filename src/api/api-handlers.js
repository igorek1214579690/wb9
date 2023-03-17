
export const getUser = async(api) => {
    return fetch(api)
        .then(res => res.json())
} 