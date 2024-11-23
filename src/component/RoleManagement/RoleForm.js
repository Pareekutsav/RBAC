import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Paper,
} from '@mui/material';

const RoleForm = ({ role, onSubmit }) => {
  const [name, setName] = useState(role ? role.name : '');
  const [permissions, setPermissions] = useState(role ? role.permissions : []);
  const availablePermissions = ['Read', 'Write', 'Delete'];

  const handlePermissionChange = (permission) => {
    if (permissions.includes(permission)) {
      setPermissions(permissions.filter((perm) => perm !== permission));
    } else {
      setPermissions([...permissions, permission]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: role?.id || null, name, permissions });
  };

  return (
    <Paper elevation={3} style={{ padding: '24px', marginTop: '16px' }}>
      <Typography variant="h5" gutterBottom>
        {role ? 'Edit Role' : 'Add New Role'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Role Name */}
          <Grid item xs={12}>
            <TextField
              label="Role Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Grid>

          {/* Permissions */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Permissions
            </Typography>
            <Grid container spacing={1}>
              {availablePermissions.map((permission) => (
                <Grid item xs={12} sm={6} md={4} key={permission}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={permissions.includes(permission)}
                        onChange={() => handlePermissionChange(permission)}
                        color="primary"
                      />
                    }
                    label={permission}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Actions */}
          <Grid item xs={12} sm={6}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Save Role
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={() => {
                setName('');
                setPermissions([]);
              }}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default RoleForm;
