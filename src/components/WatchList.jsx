import Card from "./Card";

export default function WatchList(props) {
    const { watchList, addToWatchList } = props
    return (
        <>
            {watchList.map((movie, movieIndex) => {
                return (
                    <Card key={movieIndex} title={movie.title} year={movie.release_date} img={movie.poster_path} rating={movie.vote_average} genres={movie.genre_ids} addToWatchList={addToWatchList} id={movie.id}/>
                )
            })}
        </>
    )
}