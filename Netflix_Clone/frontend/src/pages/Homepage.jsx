import React from 'react';
import Movie from '../components/Movie';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';


const Homepage = () => {
 return (
   <div className='p-5'>
     <Movie/>
     <MovieList title="Now Playing" category="now_playing"/>
     <MovieList title="Top Rated" category="top_rated"/>
     <MovieList title="Popular" category="popular"/>
     <MovieList title="Upcoming" category="upcoming"/>
     <Footer/> 
   </div>
 )
}


export default Homepage;