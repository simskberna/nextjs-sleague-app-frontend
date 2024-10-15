'use client';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow'; 
 
export type Column = {
  id: string;
  label: string;
  minWidth: number;
  align?: 'right' | 'left' | 'center';
  format?: (value: any) => string | React.JSX.Element;
};

export type Row = {
  [key: string]: any;
};

type TableComponentProps = {
  columns: Column[];
  rows: Row[];
  headerBackground?:string;
  border?:string;
  rowStyle?:Object;
};

const TableComponent: React.FC<TableComponentProps> = ({ columns, rows,headerBackground,border,rowStyle}) => {
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', border: border }} className='table'>
      <TableContainer sx={{ maxHeight: 440,maxWidth:{xs:'350px',sm:'unset'} }}>
        <Table stickyHeader aria-label="sticky table">
        <TableHead sx={{ backgroundColor: '#1976d2' }}>
          <TableRow>
            {columns.map((column,index) => (
              <TableCell
                key={index}
                align={column.align}
                sx={{ fontWeight: 'bold', minWidth: column.minWidth, backgroundColor: headerBackground }}
                style={rowStyle}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
        {rows.map((row, index) => { 
          return (
            <TableRow hover role="checkbox" tabIndex={-1} key={index}>
              {columns.map((column) => {
                const value = row[column.id];
                return (
                  <TableCell key={column.id} align={column.align}>
                    {column.format && typeof column.format === 'function' ? (
                      column.format(value)
                    ) : (
                      value
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>


        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableComponent;
