import SearchBar from "./SearchBar";


export default function Header() {
    return (
        <header>
            <div className="header-div">
                <h1>Find Movies You'll Love</h1>
                <button className="watchList-btn">My Watchlist</button>
            </div>
            <div className="search-div">
                <SearchBar />
            </div>
        
           
        
            
        </header>
    )
}