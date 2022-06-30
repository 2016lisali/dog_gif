import React from 'react'
import { IDog } from './IDog';
const DogCarousel = (props:{dogs:IDog[]}) => {
  const {dogs} = props;
  return (
    <div id="carouselExampleControls" className="carousel carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={dogs[0]?.images.downsized_medium.url}  className="d-block w-100" alt="..." />
        </div>
        {dogs.map(dog=>(
        <div className="carousel-item">
          <img src={dog.images.downsized_medium.url} className="d-block w-100" alt="..." />
        </div>
        ))}

      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default DogCarousel