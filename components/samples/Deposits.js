import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Button from '@material-ui/core/Button';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <>
      <Title>Recent Deposits</Title>
      <Typography component='p' variant='h4'>
        $3,024.00
      </Typography>
      <Typography color='textSecondary' className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Button color='primary' href='#' onClick={preventDefault}>
          View balance
        </Button>
      </div>
    </>
  );
}
