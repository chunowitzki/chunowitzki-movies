import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";


export default function Header(props) {
    const { toggleWatchList } = props
    return (
        <header>
            <div className="header-div">
                <Link to="/" className="header-Title"><h1>Find Movies You'll Love</h1></Link>
                <Link to="/watchList" className="watchList-btn">My Watchlist</Link>
            </div>
            <div className="search-div">
                <SearchBar />
            </div>
        
           
        
            
        </header>
    )
}