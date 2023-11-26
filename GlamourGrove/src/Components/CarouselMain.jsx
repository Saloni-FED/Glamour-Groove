import React from 'react'
import Carousel from './Carousel'
import IMAGES from '../../Utils/Constant/slider'
const CarouselMain = () => {
  
  return (
    <div>
      <Carousel images={IMAGES}/>
    </div>
  )
}

export default CarouselMain
