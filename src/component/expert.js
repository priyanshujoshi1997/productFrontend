import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Divider } from '@material-ui/core';
import './/css/expert.css';
import Navbar from './navbar'
const API_KEY = 'AIzaSyAbHGza_BDcR3st4Cj2Erv7BUkllpC_ieU';
const API_URL = `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet,statistics&chart=mostPopular&maxResults=10`;
const VideoItem = ({ video }) => {
  return (
      <div className="video-item">
          <img src={video.thumbnail} alt={video.title} />
          <div className="video-info">
              <h3>{video.title}</h3>
              <p>{video.channel}</p>
              <p>{video.views} views</p>
              <p>{video.duration}</p>
          </div>
      </div>
  );
};
export default function Expert(prm_value) {
  const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();

            const videoItems = data.items.map((item) => ({
                id: item.id,
                title: item.snippet.title,
                thumbnail: item.snippet.thumbnails.medium.url,
                views: item.statistics.viewCount,
                duration: item.duration,
                channel: item.snippet.channelTitle,
            }));

            setVideos(videoItems);
        } catch (error) {
            console.log('Error fetching videos:', error);
        }
    };
  return (
    <>
    <Navbar></Navbar>
    <div className="catalogue_conatiner"> 
    <h2 className='d-flex justify-content-center'>You Have Selected Parameter 1</h2>
      <Card sx={{ maxWidth: 345 ,ml:10}}>
      <CardMedia className='expertcard'
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/expert.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Expert A
        </Typography>
        <Typography variant="body2" color="text.secondary">
          some Dummy Text about Expert
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Divider/>
    <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Your Playlist
                            </Typography>
                            <div className="video-list">
                                {videos.map((video) => (
                                    <div>
                                        <VideoItem key={video.id} video={video} />
                                        <Divider />
                                        <br />
                                    </div>

                                ))}
                            </div>
                        </CardContent>
                    </Card>

                </Grid>
    </div>
    </>
    
    
  );
}