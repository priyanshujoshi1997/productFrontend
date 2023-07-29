import React from 'react';
import { Grid, Paper } from '@material-ui/core';

const TwoColumnLayout = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={8}>
        <Paper>playing</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>playlist</Paper>
      </Grid>
    </Grid>
  );
};

export default TwoColumnLayout;
