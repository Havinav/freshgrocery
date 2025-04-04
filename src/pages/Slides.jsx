import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';


const Slides = () => {
  return (
    <div>
     <Swiper
      modules={[Autoplay]} // Include the Autoplay module
      spaceBetween={30}    // Space between slides
      slidesPerView={1}    // Number of slides visible at once
      autoplay={{
        delay: 2500,       // Delay between transitions in milliseconds (2.5 seconds)
        disableOnInteraction: false, // Autoplay won't stop after user interaction
      }}
      loop={true}          // Enable looping
      onSlideChange={() => console.log('Slide changed')}
      onSwiper={(swiper) => console.log('Swiper initialized', swiper)}
    >
      <SwiperSlide>
        <div style={{ height: '300px', background: '#ffcccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <img src="https://media.istockphoto.com/id/641708286/photo/fresh-organic-vegetables-and-fruits-on-shelf-in-supermarket-farmers-market-healthy-food.jpg?s=612x612&w=0&k=20&c=50ikK5J67l4XigbHSOrcqSnoJ6Wa3PLpIf1ntYy_KvE="
          className=" w-full rounded-lg"
         />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ height: '300px', background: '#ccffcc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="https://media.istockphoto.com/id/926538832/photo/shopping-lists-in-app-format.jpg?s=612x612&w=0&k=20&c=h18CZvn3yi12btPzX8RKMJK8PPsDKqX5z4OlKARqX_k="
          className="h-auto w-full rounded-lg"
         />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ height: '300px', background: '#ccccff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="https://media.istockphoto.com/id/1213524926/photo/woman-holding-grocery-bag.jpg?s=612x612&w=0&k=20&c=LeKfRxVFj0Wu9pcVlaCBw7hIz9enNGfcMm9HtUO0MTk="
          className="h-auto w-full rounded-lg"
         />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ height: '300px', background: '#ffffcc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="https://media.istockphoto.com/id/1077256900/photo/vegetables-greengrocery-in-supermarket-colors-for-food-background.jpg?s=612x612&w=0&k=20&c=V5vpMu1y-j7vo2apdYFGD1g7RBPGeEOJARlyonkrb38="
          className="h-auto w-full rounded-lg"
         />
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Slides;
