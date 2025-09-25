import React from 'react'
import Movie from '../components/Movie'
import MovieList from '../components/MovieList'


const Homepage = () => {
 return (
   <div className='p-5'>
     <Movie/>
     <MovieList />
     <MovieList />
     <MovieList />
   </div>
 )
}


export default Homepage