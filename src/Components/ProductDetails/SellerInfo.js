import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    // minWidth: 450,
  },
});
export default function SellerInfo() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small">
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row"> Nome </TableCell>
            <TableCell align="right"> Denner Stevens </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row"> Reputação </TableCell>
            <TableCell align="right"> Plus Ultra </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
