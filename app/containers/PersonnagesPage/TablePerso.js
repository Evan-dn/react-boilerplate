import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable(props) {
  const classes = useStyles();
  const { persos } = props; // deconstrcution en ES6 permet de dire que les props sont = this.props.persos
  console.log('simple table : ', props.persos);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Nom</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Comics</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {persos.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">
                {new Intl.DateTimeFormat('en-GB', {
                  year: 'numeric',
                  month: 'short',
                  day: '2-digit',
                }).format(Date.parse(row.modified))}
              </TableCell>
              <TableCell align="center">{row.comics.available}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
