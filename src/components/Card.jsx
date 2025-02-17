export default function Card(props){
    const { title, year, img , rating, genres } = props
    return (
        <div className="card-div">
            <img src={img}/>
            <p>{title}</p>
            <div className="description-div">
                <p>⭐️ {rating}</p>
                <p>{genres[0]}</p>
                <p>{year}</p>
            </div>
        </div>
    )
}