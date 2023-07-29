import {Header} from "./components/Header"
import './App.css';
import {Routes, Route} from "react-router-dom"
import {Home} from "./pages/Home"
import { VideoList } from "./pages/VideoList";
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header/>
      
      </header>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:category" element={<VideoList/>}/>
      </Routes>
    </div>
  );
}

export default App;
