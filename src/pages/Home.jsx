import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import Loader from '../components/Loader';

function Home() {
  let [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get('https://www.omdbapi.com/?s=Marvel&apikey=cca07946').then((response) => {
      console.log(response.data.Search);
      setMovies(response.data.Search);
    });
  }, []);

  return (
    <>
        <div className='w-[1125px] mx-auto mt-10 flex flex-wrap gap-5 justify-center'>
            {
                  movies.length > 0 ? movies.map((movie) => <MovieCard title={movie.Title} year={movie.Year} poster={movie.Poster} />) : <Loader />     
            }
        </div>
    </>
  );
}   

export default Home;