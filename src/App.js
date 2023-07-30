import {Header} from "./components/Header"
import './App.css';
import {Routes, Route} from "react-router-dom"
import {Home} from "./pages/Home"
import { VideoList } from "./pages/VideoList";
import { WatchLater } from "./pages/WatchLater";
import {Explore}  from "./pages/Explore"
import {Playlist} from "./pages/Playlist"
import { SinglePlaylist } from "./pages/SinglePlaylist";
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header/>
      
      </header>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:category" element={<VideoList/>}/>
        <Route path="/watchLater" element={<WatchLater/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/playlists" element={<Playlist/>}/>
        <Route path="/:playListId" element={<SinglePlaylist/>}/>
      </Routes>
    </div>
  );
}

export default App;
