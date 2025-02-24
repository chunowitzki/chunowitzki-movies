import { useEffect, useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Card from './components/Card'
import WatchList from './components/WatchList'
import {BrowserRouter, Routes, Route, Link } from "react-router-dom"
import HomePage from './components/HomePage'


function App() {
  const [loading, setLoading] = useState(false)
  const [movieData, setMovieData] = useState([])
  const [watchList, setWatchList] = useState([])
  const [watchListOn, setWatchListOn] = useState(false)
  
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

  
function addToWatchList(id) {
  const newMovie = movieData.filter(movie => movie.id === id)[0]
  !watchList.includes(newMovie) ? setWatchList(prev => [...prev, newMovie]) : ""
  
}

function toggleWatchList(){
  setLoading(prev => !prev)
  setWatchListOn(prev => !prev)
  
}
 
  return (
    <>
      <BrowserRouter>
        <Header toggleWatchList={toggleWatchList}/>
        <div className='card-containers'>
          <Routes>

            <Route path="/" element={loading && <HomePage movieData={movieData} addToWatchList={addToWatchList}/>}/>
            <Route path="/watchList" element={<WatchList watchList={watchList} addToWatchList={addToWatchList}/>}/>
            
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
