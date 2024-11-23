import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import UserTable from './UserTable';
import UserForm from './UserForm';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', isActive: true },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', isActive: false },
  ]);

  const [roles] = useState([
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Editor' },
    { id: 3, name: 'Viewer' },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleSaveUser = (user) => {
    if (user.id) {
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
    } else {
      setUsers([...users, { ...user, id: Date.now() }]);
    }
    setIsFormVisible(false);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsFormVisible(true);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <Box>
      {isFormVisible ? (
        <Box>
          <Button
            variant="outlined"
            onClick={() => setIsFormVisible(false)}
            style={{ marginBottom: '16px' }}
          >
            Back to User List
          </Button>
          <UserForm user={selectedUser} roles={roles} onSubmit={handleSaveUser} />
        </Box>
      ) : (
        <Box>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setSelectedUser(null);
              setIsFormVisible(true);
            }}
            style={{ marginBottom: '16px' }}
          >
            Add New User
          </Button>
          <UserTable users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />
        </Box>
      )}
    </Box>
  );
};

export default UserManagement;
