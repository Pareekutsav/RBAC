import React, { useState } from 'react';
import { Container, Typography, Button, Box, Tabs, Tab } from '@mui/material';
import UserManagement from './component/UserManagement/UserManagement';
import RoleManagement from './component/RoleManagement/RoleManagement';

const App = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '40px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Admin Dashboard
      </Typography>
      <Tabs value={tabIndex} onChange={handleTabChange} centered>
        <Tab label="User Management" />
        <Tab label="Role Management" />
      </Tabs>
      <Box style={{ marginTop: '20px' }}>
        {tabIndex === 0 && <UserManagement />}
        {tabIndex === 1 && <RoleManagement />}
      </Box>
    </Container>
  );
};

export default App;
