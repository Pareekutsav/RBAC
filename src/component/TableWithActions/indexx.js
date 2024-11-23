import React from 'react';
import {
  Button,
  Table,
  TableHead,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
  useMediaQuery,
  Box,
} from '@mui/material';
import { useTheme } from '@mui/system';

const TableWithActions = ({ data, columns, onEdit, onDelete }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check for small screens

  return (
    <TableContainer
      component={Paper}
      style={{
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        overflowX: 'auto',
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={col.field}>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}
                >
                  {col.header}
                </Typography>
              </TableCell>
            ))}
            <TableCell align="right">
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}
              >
                Actions
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              {columns.map((col) => (
                <TableCell key={col.field}>
                  <Typography
                    style={{
                      fontSize: isMobile ? '0.8rem' : '1rem',
                      wordBreak: 'break-word', // Prevent text overflow
                    }}
                  >
                    {item[col.field]}
                  </Typography>
                </TableCell>
              ))}
              <TableCell align="right">
                <Box
                  display="flex"
                  flexDirection={isMobile ? 'column' : 'row'} // Stack buttons on mobile
                  justifyContent={isMobile ? 'center' : 'flex-end'}
                  alignItems="center"
                  gap={isMobile ? '8px' : '16px'}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size={isMobile ? 'small' : 'medium'}
                    onClick={() => onEdit(item)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    size={isMobile ? 'small' : 'medium'}
                    onClick={() => onDelete(item.id)}
                  >
                    Delete
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableWithActions;
