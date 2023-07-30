import React, { useContext } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { VideoContext } from '..';
import { NavLink } from 'react-router-dom';


export const Playlist = () =>{
    const {state, dispatch} = useContext(VideoContext)
     function AddPlaylist() {
        return (
            <div>
             
                <Popup trigger=
                    { <img src="https://w7.pngwing.com/pngs/68/239/png-transparent-number-computer-icons-plus-miscellaneous-game-plus.png" height="40px" alt="add playlist"/>}
                    modal nested>
                    {
                        close => (
                            <div className='modal'>
                                <div className='content'>
                                  <h3>Add to playlist</h3>
                                  <input placeholder='New playlist' onChange={(e)=> dispatch({type:"playListName", payload:e.target.value })} />
                                  <button onClick={()=> dispatch({type:"managePlaylist", create : true})}>Create new playlist</button>
                                </div>
                                <div>
                                    <button onClick=
                                        {() => close()}>
                                            Close 
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </Popup>
            </div>
        )
    };
  
    return(
        <div>
           {AddPlaylist()}
           <div>
            {
                state.playlists?.map(playlist =><ul>
              <img src="https://static.thenounproject.com/png/1144261-200.png" alt="delete" height="30px" onClick={()=> dispatch({type:"managePlaylist", create : false, payload:playlist})}/>
               <NavLink to={`/${playlist.id}`}> <img src="https://picsum.photos/200" alt="cover" />  </NavLink>
                <li>{playlist.title}</li></ul>)
            }
           </div>
        </div>
    )
}