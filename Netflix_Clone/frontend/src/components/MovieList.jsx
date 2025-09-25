import MovieImg from "../assets/sp2.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const MovieList = () => {
    const data = [
        {
            id: 1,
            title: "Card 1",
            description: "Description for Card 1",
            imageUrl: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            title: "Card 2",
            description: "Description for Card 2",
            imageUrl: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            title: "Card 3",
            description: "Description for Card 3",
            imageUrl: "https://via.placeholder.com/150",
        },
    ];
  return (
    <div className='text-white md:px-4'> 
        <h2 className='pt-10 pb-5 text-lg font-medium'>Upcoming</h2>

        <Swiper slidesPerView={"auto"} spaceBetween={10} className="mySwiper">
            {data.map((item) => (
            <SwiperSlide key={index} className="max-w-72">
                <img src={MovieImg} alt="" className='h-44 w-full object-center object-cover'/>
                <p className='text-center pt-2'>a good movie</p>
            </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default MovieList