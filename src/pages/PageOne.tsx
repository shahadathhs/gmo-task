import { TextField, Button, Container, Typography, Alert } from '@mui/material';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function PageOne() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const message = location.state?.message;

  const handleSubmit = () => {
    if (name && phone && email) {
      localStorage.setItem('user', JSON.stringify({ name, phone, email }));
      navigate('/pageTwo');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Enter your details</Typography>
      {message && <Alert severity="warning">{message}</Alert>}
      <TextField 
        label="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        fullWidth 
        margin="normal" 
        required
      />
      <TextField 
        label="Phone Number" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
        fullWidth 
        margin="normal" 
        required
      />
      <TextField 
        label="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        fullWidth 
        margin="normal" 
        required
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSubmit}
        disabled={!name || !phone || !email}
      >
        Submit
      </Button>
    </Container>
  )
}
