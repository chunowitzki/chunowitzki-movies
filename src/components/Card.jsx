
export default function Card(props){
    const { title, year, img , rating, genres, addToWatchList, id, removeFromWatchList } = props

    const genrez = [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
        }
    ]

  const filteredGenres = genrez.filter(genre => genres.includes(genre.id)).map(filter => filter.name)

    return (
        <div className="card-div">
            <img className="movie-image"src={`http://image.tmdb.org/t/p/w154${img}`}/>
            <p>{title}</p>
            <div className="description-div">
                <p>⭐️ {rating} ⁃ {year.slice(0,4)}</p>
                <p>{filteredGenres.join(", ")}</p>
                 <button className="watchList-button" onClick={() => addToWatchList(id)}> <i className="fa-solid fa-circle-plus"></i></button>
                <button onClick={() => removeFromWatchList(id)}><i class="fa-solid fa-circle-minus"></i></button>
            </div>
        </div>
    )
}