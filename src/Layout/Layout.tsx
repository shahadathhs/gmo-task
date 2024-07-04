import { NavLink, Outlet } from "react-router-dom";
import { Button, Box } from "@mui/material";

export default function Layout() {
  return (
    <Box >
      <Box display="flex" flexDirection="row" justifyContent="center">
      <Button component={NavLink} to="/" variant="text" color="inherit">
        Page One
      </Button>
      <Button component={NavLink} to="/pageTwo" variant="text" color="inherit">
        Page Two
      </Button>
      </Box>
      <Outlet />
    </Box>
  );
}
