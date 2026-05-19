import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';



function Details() {
  let { title } = useParams();
  let [movie, setMovie] = React.useState({});
  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?t=${title}&apikey=cca07946`).then((response) => {
      console.log(response.data);
      setMovie(response.data);
    });
  }, [title]);


  return (
   <>
    <div className='w-[800px] mx-auto mt-10 flex gap-5 justify-center items-center'>
        <img src={movie.Poster} className="w-64 h-96 object-contain" alt="" />
        <div>
            <h1 className='text-3xl font-bold mb-4'>{movie.Title}</h1>
            <p className='text-gray-500 mb-2'>Released: {movie.Released}</p>
            <p className='text-gray-500 mb-2'>Genre: {movie.Genre}</p>
            <p className='text-gray-500 mb-2'>Director: {movie.Director}</p>
            <p className='text-gray-500 mb-2'>Actors: {movie.Actors}</p>
            <p className='text-gray-500 mb-2'>Description: {movie.Plot}</p>
            <p className='text-gray-500 mb-2'>IMDB Rating: {movie.imdbRating}</p>
        </div>
    </div>
   </>
  )
}

export default Details