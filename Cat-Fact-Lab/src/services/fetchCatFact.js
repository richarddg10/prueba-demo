const URL = 'https://catfact.ninja/fact'

export const fetchFact = async () => {
    return fetch(URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Something went wrong with the fact')
            }
           return response.json()
        })
        .then((data) => {
            const fact = data.fact
            return fact
        })
        .catch((error) => {
            throw new Error(error)
        })
}