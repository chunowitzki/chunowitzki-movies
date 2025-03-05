export default function SearchBar(props) {
    const { movieData, setMovieData } = props
    function search(formData){
        const query = formData.get('movieSearch')
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGU4NzkwMGUwMWEzNzRiMGEwNmJiNTFkOTM5ZTJlNSIsIm5iZiI6MTczOTExNzYxNS4zNDYsInN1YiI6IjY3YThkNDJmNTcxZDcwN2YxNGM4ZGRmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2d8_aBluruQU-RWWLppcF9hdcIirK6x54fyPFGjbLQQ'
            }
          };
      
          fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`, options)
          .then(res => res.json()) 
          .then(res => {
            setMovieData(res.results)
            console.log(res.results)
          })
          .catch(err => console.error(err));

          
    }
    return (
        <div className="search-input">
            <form action={search}>
                <input type="text" placeholder="🔎   Search for a movie"
                name="movieSearch" required/>
                <button className="search-btn">Search</button>
            </form>
        </div>
    )
}