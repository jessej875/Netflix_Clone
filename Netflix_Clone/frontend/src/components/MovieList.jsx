import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const apiKey = import.meta.env.VITE_API_KEY;

const MovieList = ({ title, category }) => {
    const [data, setData] = useState([]);
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: apiKey
        }
    };

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
            options
        )
        .then((res) => res.json())
        .then((res) => setData(res.results))
        .catch((err) => console.error(err));
    }, []);

    return (
        <div className="text-white md:px-4">
        <h2 className="pt-10 pb-5 text-lg font-medium">{title}</h2>

        <Swiper slidesPerView={"auto"} spaceBetween={10} className="mySwiper">
            {data.map((item, index) => (
            <SwiperSlide key={index} className="max-w-72">
                <Link to={`/movie/${item.id}`}>
                <img 
                    src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                    alt=""
                    className="h-44 w-full object-center object-cover"/>
                    <p className="text-center pt-2">A very good movie</p>
                </Link>
            </SwiperSlide>
            ))}
        </Swiper>
        </div>
    );
}
export default MovieList;