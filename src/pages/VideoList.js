import { NavLink, useParams } from "react-router-dom"
import { VideoContext } from ".."
import { useContext } from "react"
export const VideoList = ()=>{
    const {category} = useParams()
    const {state, dispatch} = useContext(VideoContext)
    const selectedCategory = state.data?.filter(item => item.category === category)
    return(
        <div>
            <h1>{category}</h1>
            <div>
                {
                    selectedCategory?.map(video =><div>
                        {<div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY9vC4avPe99O1R8r2P2wEwGC1CnxuufqoKlf9L82Iqghv18Qk4KJBCcbuBc5AfSqhHak&usqp=CAU" height="30px" alt="save to watch later" onClick={()=> dispatch({type : "updateWatchLater", payload:video})}/>
                            <NavLink to={video.src}><img src={video.thumbnail} height="300px" alt={video.title}/></NavLink>
                            <h3>{video.title}</h3>
                            <h3>{video.category}</h3>
                            <p>{`${video.views} views | ${video.creator}`}</p>
                            </div>
                        }
                    </div>)
                }
            </div>
        </div>
    )
}