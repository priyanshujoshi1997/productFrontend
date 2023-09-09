import React, { useEffect } from "react"
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
import CountryFilter from './filterCountry.js';
import ExpertFilter from './filterExpert.js';
import ParameterFilter from './filterParameter.js';
import axios from "axios";
function Catalogue() {
  
  const[videos,setvideos]=useState([])
  const [selectedFilters, setSelectedFilters] = useState({
    experts: [],
    parameters: [],
    countries: [],
  });


  useEffect(()=>{
    const url ="https://dummy-project.onrender.com/api/v1/catalogue/videos"
    const body={filter:selectedFilters}
    axios({
      method: 'post',
      headers: { 'withCredentials': false },
      url: url,
      data: body
    }).then((response)=>{
      setvideos(response.data.data)
    }).catch((error)=>{
      console.log(error)
      setvideos([])
    })
  },[selectedFilters])
  

  const handleCountryFilterChange = (selectedCountries) => {
    let c=0;
    for (const [key, value] of Object.entries(selectedCountries)) {
      if(value){
        c++;
        setSelectedFilters((selectedFilters) => ({
          ...selectedFilters,
          countries:[... new Set([...selectedFilters.countries, key])] ,
        }));
        console.log(JSON.stringify(selectedFilters))
      }else{
        selectedFilters.countries.pop()
      }
      if(c==0){
        setSelectedFilters({
          experts: [],
          parameters: [],
          countries: [],
        })
      }

      // if(value==false){
      //   console.log("false wala",value,key)
      // selectedFilters.countries=selectedFilters.countries.filter((item)=>item!==key)
      // console.log("false false",selectedFilters)
      // setSelectedFilters(selectedFilters)
      // }

      // if(Object.keys(selectedCountries).length===0){
      //   setSelectedFilters(selectedFilters);
      // }
    }
    console.log(JSON.stringify(selectedFilters))
  };
  const handleParameterChange=(selectedParameters)=>{
    for (const [key, value] of Object.entries(selectedParameters)) {
      if (value) {
        setSelectedFilters((selectedFilters) => ({
          ...selectedFilters,
          parameters: [... new Set([...selectedFilters.parameters, key])],
        }));
      }
     
    }
    console.log("selected "+JSON.stringify(selectedFilters))  
  };
  const handleExpertChange=(selectedExperts)=>{
    for (const [key, value] of Object.entries(selectedExperts)) {
      if (value) {
        
        setSelectedFilters((selectedFilters) => ({
          ...selectedFilters,
          experts: [... new Set([...selectedFilters.experts, key])],
        }));
      }
    }
  };
  
  console.log("hello"+videos);
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
                        <ParameterFilter onParameterFilterChange={handleParameterChange} />
                        <CountryFilter onCountryFilterChange={handleCountryFilterChange} />
                        <ExpertFilter onExpertFilterChange={handleExpertChange}> </ExpertFilter>
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
                        {<VideoGrid videos={videos}></VideoGrid>}
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