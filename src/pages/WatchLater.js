import { useContext } from "react"
import { VideoContext } from ".."
import { NavLink } from "react-router-dom"


export const WatchLater = () =>{
    const {state, dispatch} = useContext(VideoContext)
    return(
        <div>
{
    state.watchLater?.map(video =><div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY9vC4avPe99O1R8r2P2wEwGC1CnxuufqoKlf9L82Iqghv18Qk4KJBCcbuBc5AfSqhHak&usqp=CAU" height="30px" alt="save to watch later" onClick={()=> dispatch({type : "updateWatchLater", payload:video})}/>
        <NavLink to={video.src}><img src={video.thumbnail} height="300px" alt={video.title}/></NavLink>
                            <h3>{video.title}</h3>
                            <h3>{video.category}</h3>
                            <p>{`${video.views} views | ${video.creator}`}</p>
    </div>)
}
        </div>
    )
}