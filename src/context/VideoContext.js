import { createContext, useReducer } from "react";
import { videos } from "../components/VideoData";
// import {v4 as uuid} from uuid()
export const VideoContext = createContext()
const VideoReducer = (state, action)=>{
    switch(action.type){
        case "updateWatchLater":{
            // localStorage.setItem("key", action.payload)
            console.log(state.watchLater)
            return {...state, watchLater: state.watchLater?.find(item => item._id === action.payload._id) ? state.watchLater?.filter(item => item._id !== action.payload._id) :[...state.watchLater, action.payload]  }
        }
        case "searchVideos":{
            return {...state, data: videos?.filter(video=> video.title.toLowerCase().includes(action.payload.toLowerCase()))}
        }
case "playListName":{
    return {...state, playListName: action.payload}
}
case "managePlaylist":{
    // console.log(state.playlists)
    return {...state, playlists: action.create ? [...state.playlists,{id:Math.random() * 100, title : state.playListName, contents: []}] : state.playlists?.filter(playlist => playlist.id !== action.payload.id)}
}
        default:{
            return {...state}
        }
    }

}

export const VideoContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(VideoReducer, {data: videos, watchLater: [], playListName:"", playlists:[]})
    return(
        <VideoContext.Provider value={{state, dispatch}}>
            {children}
        </VideoContext.Provider>
    )
}