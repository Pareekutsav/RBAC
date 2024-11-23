import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import RoleTable from './RoleTable';
import RoleForm from './RoleForm';

const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'Editor', permissions: ['Read', 'Write'] },
    { id: 3, name: 'Viewer', permissions: ['Read'] },
  ]);

  const [selectedRole, setSelectedRole] = useState(null); // Role being edited
  const [isFormVisible, setIsFormVisible] = useState(false); // Toggle between table and form

  // Save Role (Add or Edit)
  const handleSaveRole = (role) => {
    if (role.id) {
      // Update existing role
      setRoles(roles.map((r) => (r.id === role.id ? role : r)));
    } else {
      // Add new role
      setRoles([...roles, { ...role, id: Date.now() }]);
    }
    setIsFormVisible(false); // Return to table view
    setSelectedRole(null);
  };

  // Edit Role
  const handleEditRole = (role) => {
    setSelectedRole(role);
    setIsFormVisible(true);
  };

  // Delete Role
  const handleDeleteRole = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  return (
    <Box>
      {isFormVisible ? (
        <Box>
          {/* Back Button */}
          <Button
            variant="outlined"
            onClick={() => {
              setIsFormVisible(false);
              setSelectedRole(null);
            }}
            style={{ marginBottom: '16px' }}
          >
            Back to Role List
          </Button>

          {/* Role Form */}
          <RoleForm role={selectedRole} onSubmit={handleSaveRole} />
        </Box>
      ) : (
        <Box>
          {/* Add New Role Button */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setSelectedRole(null);
              setIsFormVisible(true);
            }}
            style={{ marginBottom: '16px' }}
          >
            Add New Role
          </Button>

          {/* Role Table */}
          <RoleTable
            roles={roles}
            onEdit={handleEditRole}
            onDelete={handleDeleteRole}
          />
        </Box>
      )}
    </Box>
  );
};

export default RoleManagement;
