import { createContext, useReducer } from "react";
import { videos } from "../components/VideoData";
export const VideoContext = createContext()
const VideoReducer = (state, action)=>{
    switch(action.type){
        case "updateWatchLater":{
            localStorage.setItem("key", action.payload)
            return {...state, watchLater:state.watchLater?.find(item => item.id === action.payload.id) ? [...state.watchLater, localStorage.getItem("key")] : state.watchLater?.filter(item => item.id !== action.payload.id)}
        }
        default:{
            return {...state}
        }
    }

}
export const VideoContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(VideoReducer, {data: videos, watchLater: []})
    return(
        <VideoContext.Provider value={{state, dispatch}}>
            {children}
        </VideoContext.Provider>
    )
}