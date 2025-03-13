import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";



export default function Header(props) {
    const { toggleWatchList, movieData, setMovieData} = props
    function popularMoviePage() {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGU4NzkwMGUwMWEzNzRiMGEwNmJiNTFkOTM5ZTJlNSIsIm5iZiI6MTczOTExNzYxNS4zNDYsInN1YiI6IjY3YThkNDJmNTcxZDcwN2YxNGM4ZGRmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2d8_aBluruQU-RWWLppcF9hdcIirK6x54fyPFGjbLQQ'
            }
          };
      
          fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
          .then(res => res.json()) 
          .then(res => {
            setMovieData(res.results)
            console.log(res.results)
          })
          .catch(err => console.error(err));
    }
    return (
        <header>
            <div className="header-div">
                <Link to="/" className="header-Title" ><h1 onClick={popularMoviePage}>Find Movies You'll Love</h1></Link>
                <Link to="/watchList" className="watchList-btn">My Watchlist</Link>
            </div>
            <div className="search-div">
                <SearchBar movieData={movieData} setMovieData={setMovieData}/>
            </div>
        
           
        
            
        </header>
    )
}