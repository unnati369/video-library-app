import { NavLink } from "react-router-dom"
export const Header = () =>{
    return(
        <div>
            <NavLink to="/" ><img src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_repicthousebase_1484336386-1.png" height="30px" alt="home"/><span className="blue">Home</span></NavLink>
            <NavLink to="/explore" ><img src="https://cdn2.iconfinder.com/data/icons/web-ui-18/32/explore-512.png" height="30px" alt="explore"/><span className="blue">Explore</span></NavLink>
            <NavLink to="/playlists" ><img src="https://cdn-icons-png.flaticon.com/512/7794/7794603.png" height="30px" alt="playlists"/><span className="blue">Playlists</span></NavLink>
            <NavLink to="/watchLater" ><img className="blue" src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-watch-later_90421.png" height="30px" alt="watchLater"/><span className="blue">Watch Later</span></NavLink>
        </div>
    )
}