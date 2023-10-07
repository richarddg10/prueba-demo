const IMG_URL = 'https://cataas.com/cat/says/'

export const fetchImg = async({words}) => {
    return fetch(`${IMG_URL}${words}`)
    .then((img)=>{
        if (!img.ok) {
            throw new Error('Something went wrong with the image')
        }
        const image = img.url
        return image
    })
    .catch((error)=> {
        throw new Error(error)
    })
}