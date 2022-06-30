import { useEffect, useState } from "react"
import DogCarousel from "./DogCarousel";
import { IDog } from "./IDog";

const MoreDogs = () => {
  const [dogs, setDogs] = useState<IDog[]>([]);
  const [currentDog, setCurrentDog] = useState<IDog>();
  const api_key = "hVcl0kcsICmpsN3hwuOrNUTB5nG7eKlc"
  const base_url = "https://api.giphy.com/v1/gifs/search"

  useEffect(() => {
    const getDogs = async ():Promise<any> => {
       fetch(`${base_url}?api_key=${api_key}&q=dog&limit=24`)
        .then(result=>result.json())
        .then(result=>{
          setDogs(result.data)
          setCurrentDog(result.data[0])
        })
    }
    getDogs();
  }, [])
  console.log("dogs", dogs);
  
  return (
    <div className="vh-100 d-flex align-items-center">
    <DogCarousel dogs={dogs} />
    </div>
  )
}

export default MoreDogs