import React from "react"
import {  Button } from "@mui/material";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {Card,CardHeader,CardContent,Avatar} from "@mui/material";
import CataLogueBar from './catalogueBar.js'
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './/css/catalogue.css';
import Expert from "./expert.js";



const btn_action = function(event){
   const params = event.target.value;
   window.location.href='experts?prmvalue='+params;
}

function Catalogue() {
   
    const getParamsButton = () => {
        const param_array =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    
        return param_array.map((number) => {
          return <Button variant="contained" size="large" className="btn_space">{number}</Button>
        })
    
      }
      const getCountryButton = () => {
        const country_array=['ABC','BCD','CDA','CDE','EDF','ABC','BCD','CDA','CDE','EDF','ABC','BCD','CDA','CDE','EDF']
    
        return country_array.map((item) => {
          return <Button variant="contained" size="large" className="btn_space">{item}</Button>
        })
    
      }
    return (
        <div className="catalogue_conatiner">
         <CataLogueBar></CataLogueBar>
           <Box sx={{ flexGrow: 1 }} mt={2}>
          <Grid container spacing={2}>
            <Grid item lg ={6} md={6} xs={12}>
              <Card className="card">
              <CardHeader title="Via Parameter" />
                <CardContent style={{padding:2}}>
                    <Grid>
                        <div className="btn_container">   
                    <Button variant="contained" size="large" className="btn_space" value={1} onClick={btn_action}>
                        1
                    </Button>
                     <Button variant="contained" size="large" className="btn_space">
                        2
                    </Button>    
                    <Button variant="contained" size="large" className="btn_space">
                        3
                    </Button>  
                    <Button variant="contained" size="large" className="btn_space">
                        4
                    </Button>  
                    <Button variant="contained" size="large" className="btn_space">
                        5
                    </Button>  
                    <Button variant="contained" size="large" className="btn_space">
                        6
                    </Button>  
                    <Button variant="contained" size="large" className="btn_space">
                        7
                    </Button>  
                    <Button variant="contained" size="large" className="btn_space">
                        8
                    </Button> 
                    <Button variant="contained" size="large" className="btn_space">
                        9
                    </Button>
                     <Button variant="contained" size="large" className="btn_space">
                        10
                    </Button>    
                    <Button variant="contained" size="large" className="btn_space">
                        11
                    </Button>  
                    <Button variant="contained" size="large" className="btn_space">
                        12
                    </Button>  
                    <Button variant="contained" size="large" className="btn_space">
                        13
                    </Button>  
                    <Button variant="contained" size="large" className="btn_space">
                        14
                    </Button>  
                    <Button variant="contained" size="large" className="btn_space">
                        15
                    </Button>  

                        </div>
                    
                </Grid>
                </CardContent>
            </Card>
          </Grid>
          <Grid item lg ={6} md={6} xs={12}>
          <Card className="card">
          <CardHeader title="Via Country" />
                <CardContent style={{padding:2}}>
                      <Grid>
                      <div className="btn_container">  
                    <Button variant="contained" size="large" className="btn_space">
                        ABC
                    </Button>
                     <Button variant="contained" size="large" className="btn_space">
                        BCD
                    </Button>    
                    <Button variant="contained" size="large" className="btn_space">
                        DEF
                    </Button>  
                    <Button variant="contained" size="large" className="btn_space">
                        FGH
                    </Button>  
                    <Button variant="contained" size="large" className="btn_space">
                        HIJ
                    </Button>  
                    <Button variant="contained" size="large" className="btn_space">
                        JKL
                    </Button>  
                    <Button variant="contained" size="large" className="btn_space">
                        MNO
                    </Button>  
                    <Button variant="contained" size="large" className="btn_space">
                        OPQ
                    </Button> 
                    <Button variant="contained" size="large" className="btn_space">
                        QRS
                    </Button>
                     <Button variant="contained" size="large" className="btn_space">
                        RST
                    </Button>    
                    <Button variant="contained" size="large" className="btn_space">
                        TUV
                    </Button>  
                    <Button variant="contained" size="large" className="btn_space">
                        UVW
                    </Button>  
                    <Button variant="contained" size="large" className="btn_space">
                        VWX
                    </Button>  
                    <Button variant="contained" size="large" className="btn_space">
                        WXY
                    </Button>  
                    <Button variant="contained" size="large" className="btn_space">
                        XYZ
                    </Button>
                    </div>  
                    </Grid>
                </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box></div>
     


    );
}
export default Catalogue