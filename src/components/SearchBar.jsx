export default function SearchBar() {
    return (
        <div className="search-input">
            <form action="">
                <input type="text" placeholder="🔎   Search for a movie" required/>
                <button className="search-btn">Search</button>
            </form>
        </div>
    )
}