import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import CountryTableRow from './tableRow';

const useStyles = makeStyles({
  table:{
    minWidth: 650,
    background: "#ffffff"
  },
});

function CountryTableHead() {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <CountryTableRow 
            rowElements={[{name: "FLAG"}, 
            {name:"NAME"}, {name:"POPULATION"},
            {name:"REGION"}, {name:"LANGUAGE"}]}
          />
        </TableHead>
      </Table>
    </TableContainer>
  );
}

export default CountryTableHead;