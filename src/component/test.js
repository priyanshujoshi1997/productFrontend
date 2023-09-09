import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Tab,
  Tabs,
} from '@mui/material';
import { AccountCircle, Email, Lock } from '@mui/icons-material';

const AuthModal = ({ open, handleClose }) => {
  const [tabValue, setTabValue] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tabValue === 0) {
      // Perform login logic here
      console.log('Logging in:', email, password);
    } else {
      // Perform signup logic here
      console.log('Signing up:', email, password);
    }
    handleClose(); // Close the modal after login/signup
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{tabValue === 0 ? 'Login' : 'Sign Up'}</DialogTitle>
      <DialogContent>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Login" />
          <Tab label="Sign Up" />
        </Tabs>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            InputProps={{
              startAdornment: <Email />,
            }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            InputProps={{
              startAdornment: <Lock />,
            }}
          />
          <DialogActions>
            <Button type="submit" variant="contained" color="primary">
              {tabValue === 0 ? 'Login' : 'Sign Up'}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
