import React from "react"
import {  Button } from "@mui/material";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {Card,CardHeader,CardContent,Avatar} from "@mui/material";
import CataLogueBar from './catalogueBar.js'
import { useState } from "react";
import './/css/catalogue.css';
import FilterContainer from './filterContainer.js';
import VideoGrid from "./videogrid.js"
import Search from "./search.js";
import FilterDisplay from "./filterDisplay.js";
import HeaderContainer from "./headercontainer.js";
function Catalogue() {
  const allvideos = [
    {
      country:'usa',
      parameter:1,
      expert:'expert A',
      source: 'https://www.youtube.com/embed/h_JcE0yHkDo?si=Ri24VqhRozMnfasS',
      thumbnail: 'https://example.com/thumbnail1.jpg',
    },
    {
      country:'usa',
      parameter:2,
      expert:'expert A',
      source: 'https://www.youtube.com/embed/h_JcE0yHkDo?si=Ri24VqhRozMnfasS',
      thumbnail: 'https://example.com/thumbnail2.jpg',
    },
    {
      country:'usa',
      parameter:3,
      expert:'expert A',
      source: 'https://www.youtube.com/embed/h_JcE0yHkDo?si=Ri24VqhRozMnfasS',
      thumbnail: 'https://example.com/thumbnail2.jpg',
    },
    {
      country:'uk',
      parameter:1,
      expert:'expert B',
      source: 'https://www.youtube.com/embed/h_JcE0yHkDo?si=Ri24VqhRozMnfasS',
      thumbnail: 'https://example.com/thumbnail2.jpg',
    },
    {
      country:'france',
      parameter:2,
      expert:'expert C',
      source: 'https://www.youtube.com/embed/h_JcE0yHkDo?si=Ri24VqhRozMnfasS',
      thumbnail: 'https://example.com/thumbnail2.jpg',
    },
    {
      country:'usa',
      parameter:2,
      expert:'expert A',
      source: 'https://www.youtube.com/embed/h_JcE0yHkDo?si=Ri24VqhRozMnfasS',
      thumbnail: 'https://example.com/thumbnail2.jpg',
    },
    {
      country:'uk',
      parameter:3,
      expert:'expert B',
      source: 'https://www.youtube.com/embed/h_JcE0yHkDo?si=Ri24VqhRozMnfasS',
      thumbnail: 'https://example.com/thumbnail2.jpg',
    },
    {
      country:'france',
      parameter:3,
      expert:'expert D',
      source: 'https://www.youtube.com/embed/h_JcE0yHkDo?si=Ri24VqhRozMnfasS',
      thumbnail: 'https://example.com/thumbnail2.jpg',
    },
    {
      country:'us',
      parameter:3,
      expert:'expert A',
      source: 'https://www.youtube.com/embed/h_JcE0yHkDo?si=Ri24VqhRozMnfasS',
      thumbnail: 'https://example.com/thumbnail2.jpg',
    },
    {
      country:'uk',
      parameter:6,
      expert:'expert B',
      source: 'https://www.youtube.com/embed/h_JcE0yHkDo?si=Ri24VqhRozMnfasS',
      thumbnail: 'https://example.com/thumbnail2.jpg',
    },
    {
      country:'uk',
      parameter:5,
      expert:'expert B',
      source: 'https://www.youtube.com/embed/h_JcE0yHkDo?si=Ri24VqhRozMnfasS',
      thumbnail: 'https://example.com/thumbnail2.jpg',
    },{
      country:'uk',
      parameter:5,
      expert:'expert B',
      source: 'https://www.youtube.com/embed/h_JcE0yHkDo?si=Ri24VqhRozMnfasS',
      thumbnail: 'https://example.com/thumbnail2.jpg',
    },
    // Add more video data here
  ];
  const[filterapply,setFilterApply]=useState(false)
  const[filterVideos,setFilterVideos]=useState([])
  const handleFilterChange = (filter) => {
    setFilterVideos(allvideos.filter((item) => filter["countries"].includes(item.country))
                   ||allvideos.filter((item) => filter["parameters"].includes(item.parameter))
                   ||allvideos.filter((item) => filter["experts"].includes(item.expert)))                                              
    setFilterApply(true)
    getFilteredVideo()
  };

  const getFilteredVideo = function(){
    if(filterapply && filterVideos.length>0){
      return  <VideoGrid videos={filterVideos}></VideoGrid>
    }
    return  <VideoGrid videos={allvideos}></VideoGrid>
    
  }
    return (
        
        <div className="catalogue_conatiner">   
         {/* <CataLogueBar></CataLogueBar> */}
        <Box sx={{ flexGrow: 1 }} mt={2}>
          <Grid container spacing={2}>
            <Grid item lg ={3} md={3} sm={6}>
              <Search></Search>
              <Card>
              {/* <CardHeader title="Via Parameter" /> */}
                <CardContent style={{padding:2}}>
                    <Grid>
                        <div id="video_list"> 
                        <FilterContainer onFilterChange={handleFilterChange} />
                        </div>
                    
                </Grid>
                </CardContent>
            </Card>
          </Grid>
                  
          <Grid item lg ={9} md={9} sm={6}>
          <div>
            <HeaderContainer></HeaderContainer>
            <FilterDisplay></FilterDisplay>
          </div>
          
          <div className="mt-2">
          <Card>
                <CardContent style={{padding:5}}>
                      <Grid>
                       { getFilteredVideo()}
                        {/* <VideoGrid videos={allvideos}></VideoGrid> */}
                      </Grid>
                </CardContent>
            </Card>
          </div>
          </Grid>
        </Grid>
      </Box></div>
     


    );
}
export default Catalogue