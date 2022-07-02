import { useEffect, useState } from "react"
import DogCarousel from "./DogCarousel";
import { IDog } from "./IDog";

const MoreDogs = () => {
  const [dogs, setDogs] = useState<IDog[]>([]);
  const API_KEY = process.env.REACT_APP_API_KEY
  const BASE_URL = "https://api.giphy.com/v1/gifs/search"
console.log("api_key", API_KEY);

  useEffect(() => {
    const getDogs = async ():Promise<any> => {
       fetch(`${BASE_URL}?api_key=${API_KEY}&q=dog&limit=24`)
        .then(result=>result.json())
        .then(result=>{
          setDogs(result.data)
        })
    }
    getDogs();
  }, [API_KEY])
  console.log("dogs", dogs);
  
  return (
    <div className="d-flex align-items-center">
    <DogCarousel dogs={dogs} />
    </div>
  )
}

export default MoreDogs