import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

interface RouteError {
  statusText?: string;
  message?: string;
}

const ErrorPage: React.FC = () => {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgcolor="grey.200"
      textAlign="center"
      height="100vh"
      p={4}
    >
      <Typography variant="h1" color="error" fontWeight="bold">
        Oops!
      </Typography>
      <Typography variant="h5" gutterBottom>
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography variant="body1" color="textSecondary">
        <i>{error.statusText || error.message}</i>
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Go back to home
      </Button>
    </Box>
  );
};

export default ErrorPage;