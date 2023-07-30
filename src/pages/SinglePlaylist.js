import { useContext } from "react"
import { useParams } from "react-router-dom"
import { VideoContext } from "../context/VideoContext"

export const SinglePlaylist = () =>{
    const {playListId} = useParams()
    const {state, dispatch} = useContext(VideoContext)
    const selectedPlaylist = state.playlists?.find(playlist => playlist.id === playListId)
    console.log("selectedPlaylist")
    return(
        <div>

         

        </div>
    )
}