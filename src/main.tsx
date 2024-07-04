import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import ErrorPage from './pages/ErrorPage';
import PageTwo from './pages/PageTwo';
import PageOne from './pages/PageOne';
import PrivateRoutes from './routes/PrivateRoutes';

const theme = createTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <PageOne />,
      },
      {
        path: '/pageTwo',
        element: <PrivateRoutes><PageTwo /></PrivateRoutes>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
