import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function SellerInfo({ name }) {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Nome
            </TableCell>
            <TableCell align="right">{name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Reputação
            </TableCell>
            <TableCell align="right">Plus Ultra</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
