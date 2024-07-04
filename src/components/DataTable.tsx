import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const columns: GridColDef[] = [
  { field: 'userId', headerName: 'User ID', width: 150 },
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'body', headerName: 'Body', width: 300 },
];

const DataTable: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={posts}
        columns={columns}
        pagination
        pageSizeOptions={[5]}
      />
    </div>
  );
};

export default DataTable;
