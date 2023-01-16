export const getGifs = async (categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=0WdC4oOcfYQWRJHQN1XSTP0HjEf7Xh3s&q=${categoria}&limit=20&offset=0&rating=g&lang=es `
    const resp = await fetch(url)
    const { data } = await resp.json()
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs
}

