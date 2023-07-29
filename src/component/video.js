import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, Divider } from '@material-ui/core';
import VideoControls from './videoCotrols';
import VideoPlayer from './videoPlayer';
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

const Video = () => {
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
            <Grid container spacing={4}>
                <Grid item xs={8}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">

                            </Typography>
                            {/* <video
                                controls
                                style={{ width: '100%', height: '100%' }}
                            >
                                <source src="https://www.youtube.com/watch?v=9WLdXm_-KZ0.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video> */}
                            <VideoPlayer videoId={"lVkKLf4DCn8"}></VideoPlayer>
                            <VideoControls></VideoControls>
                        </CardContent>
                    </Card>
                </Grid>
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
            </Grid>


        </>

    );
};

export default Video;