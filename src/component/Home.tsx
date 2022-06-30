import { useState, useEffect } from "react"

const Home = () => {
  const [dog1, setDog1] = useState(1);
  const [dog2, setDog2] = useState(2);
  const MAX_DEX_ID = 30;
  const getRandomDog = (notThisOne?:number): number => {
    const dogDexNumber = Math.floor(Math.random()*(MAX_DEX_ID-1)+1)
    if (dogDexNumber !== notThisOne) return dogDexNumber;
    return getRandomDog(notThisOne)
  }
  const handleClick = (dexNumber:number) => {
    setDog1(getRandomDog());
    setDog2(getRandomDog(dog1)); 
  }
  useEffect(() => {
    setDog1(getRandomDog());
    setDog2(getRandomDog(dog1)); 
  },[])
  
  return (
    <div className="main-container">
      <div className="text-light py-3">
        <h1 className="text-center">Which dog is funnier?</h1>
      </div>
      <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center">
      <div className="d-flex flex-column align-items-center">
        <img src={`./assets/${dog1}.webp`} alt={`Dog${dog1}`}/>
        <button className="btn btn-light mt-3" onClick={()=>handleClick(dog1)}>Funnier</button>
      </div>
      <div className="text-warning fs-2 px-5">VS</div>
      <div className="d-flex flex-column align-items-center">
      <img src={`./assets/${dog2}.webp`} alt={`Dog${dog2}`}/>
      <button className="btn btn-light mt-3" onClick={()=>handleClick(dog2)}>Funnier</button>
      </div>
      </div>
    </div>
  )
}

export default Home