import React from 'react';
import { IconButton, Typography } from '@material-ui/core';
import { ThumbUp, Comment, Share } from '@material-ui/icons';

const VideoControls = () => {
  return (
    <div>
      <IconButton aria-label="Like">
        <ThumbUp />
      </IconButton>
      <IconButton aria-label="Comment">
        <Comment />
      </IconButton>
      <IconButton aria-label="Share">
        <Share />
      </IconButton>
      <Typography variant="caption">123 Likes</Typography>
    </div>
  );
};

export default VideoControls;
