import React from 'react';
import TableWithActions from '../TableWithActions/index';

const UserTable = ({ users, onEdit, onDelete }) => {
  const columns = [
    { header: 'Name', field: 'name' },
    { header: 'Email', field: 'email' },
    { header: 'Role', field: 'role' },
    { header: 'Status', field: 'isActive' },
  ];
  const transformedUsers = users.map((user) => ({
    ...user,
    isActive: user.isActive ? 'Active' : 'Inactive', // Transform boolean to readable text
  }));

  return (
    <TableWithActions
      data={transformedUsers} // Use transformed data
      columns={columns}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
};

export default UserTable;
