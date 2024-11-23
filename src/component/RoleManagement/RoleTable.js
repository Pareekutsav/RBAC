import React from 'react';
import TableWithActions from '../TableWithActions/index';

const RoleTable = ({ roles, onEdit, onDelete }) => {
  const columns = [
    { header: 'Role Name', field: 'name' },
    { header: 'Permissions', field: 'permissions' },
  ];

  return (
    <TableWithActions
      data={roles}
      columns={columns}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
};

export default RoleTable;
