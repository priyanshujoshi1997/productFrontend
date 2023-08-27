import React from "react";
import {Routes , Route } from "react-router-dom" 
import { StyledEngineProvider } from '@mui/material/styles';
import "./App.css"
import Navbar from "./component/navbar";
import CataLogueBar from "./component/catalogueBar";
import Catalogue from "./component/catalogue";
import Expert from "./component/expert";
import VideoPlayer from "./component/videoPlayer";
import Profile from "./component/profile";
import Welcome from "./component/welcome";
import Login from "./component/login";
import Video from "./component/video";
import LaptopFrame from "./component/text";
import Landing from "./component/landingpage";


const App = () => {
  return (
    <div className="App">
      {/* <Welcome></Welcome> */}
       <StyledEngineProvider injectFirst>
       <Routes> 
            <Route path="/" element={<Welcome/> } /> 
            <Route path="/profile" element={<Profile/> } /> 
            <Route path="/login" element={<Login/>}/>
            <Route path="/catalogue" element={<Catalogue></Catalogue>}></Route>
            <Route path="/experts" element={<Expert></Expert>}></Route>
            <Route path="/video" element={<Video></Video>}></Route>
       </Routes> 
       </StyledEngineProvider>
       
     </div>
  );
};

export default App;


