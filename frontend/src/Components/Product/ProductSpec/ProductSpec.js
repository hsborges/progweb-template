import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    // minWidth: 450,
  },
});
export default function ProductSpec() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small">
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              {" "}
              Marca{" "}
            </TableCell>
            <TableCell align="right"> Aquela Marca </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              {" "}
              Modelo{" "}
            </TableCell>
            <TableCell align="right"> 123456 </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Ano
            </TableCell>
            <TableCell align="right">2020</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Estado
            </TableCell>
            <TableCell align="right">Novo</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
