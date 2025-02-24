import Card from "./Card"

export default function HomePage(props) {
    const { movieData, addToWatchList } = props
    return (movieData.map((movie, movieIndex) => {
        return (
          <Card key={movieIndex} title={movie.title} year={movie.release_date} img={movie.poster_path} rating={movie.vote_average} genres={movie.genre_ids} addToWatchList={addToWatchList} id={movie.id}/>
        )
      }))
}