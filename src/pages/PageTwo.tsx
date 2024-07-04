import DataTable from "../components/DataTable";
import DepartmentTree from "../components/DepartmentTree";
import { Container, Typography } from "@mui/material";

export default function PageTwo() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h5" gutterBottom>
        See Posts from JSON Placeholder
      </Typography>
      <DataTable />
      <Typography variant="h5" gutterBottom>
        Select Categories
      </Typography>
      <DepartmentTree />
    </Container>
  );
}
