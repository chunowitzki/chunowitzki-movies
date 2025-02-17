import { useEffect, useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Card from './components/Card'



function App() {
  const [loading, setLoading] = useState(false)
  const [movieData, setMovieData] = useState([])
  
  useEffect(()=> {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGU4NzkwMGUwMWEzNzRiMGEwNmJiNTFkOTM5ZTJlNSIsIm5iZiI6MTczOTExNzYxNS4zNDYsInN1YiI6IjY3YThkNDJmNTcxZDcwN2YxNGM4ZGRmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2d8_aBluruQU-RWWLppcF9hdcIirK6x54fyPFGjbLQQ'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(res => res.json())
    .then(res => {
      setMovieData(res.results)
      console.log(res.results)
    })
    .catch(err => console.error(err));

    setLoading(true)
    
  }, [0])

  

 
  return (
    <>
      <Header />
      <div className='card-containers'>
        {loading && movieData.map((movie, movieIndex) => {
          return (
            <Card key={movieIndex} title={movie.original_title} year={movie.release_date} img={movie.poster_path} rating={movie.vote_average} genres={movie.genre_ids}/>
          )
        })}
      </div>
    </>
  )
}

export default App
