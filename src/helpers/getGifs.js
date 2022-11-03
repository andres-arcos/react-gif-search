
export const getGifs = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=5Gj8NgV8GFiaf7lsTcW8xTJzNx9sfmzW&limit=10&q=${category}`;
    const rep = await fetch(url);
    const {data} = await rep.json();
    const gifs = data.map(img=>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))
    return gifs;
}
