import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export function GifGrid({category}) {
     
    const {images, isLoading} = useFetchGifs(category);
    //eso se fue al custom hook
    /*
    const [images,setImages]=useState([]);

    const getImages = async()=>{
        const newImages = await getGifs(category);
        setImages(newImages);
    }

     //en este caso se usa para solo ejecutar la funcion la primera vez que ingresa al componente
    useEffect(()=>{
        getImages(category);
    },[])
    */
    

   
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            
            <div className="card-grid">
                {   
                    images.map((image)=>(
                    <GifItem 
                        key={image.id} 
                        {...image}
                    />
                    ))
                }
            </div>
            
        </>
  )
}
