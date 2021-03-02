import Layout from '../../components/layout';

import Grid from '@material-ui/core/Grid';
import useStyles from '../../styles/mui-styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

// import NotificationsIcon from '@material-ui/icons/Notifications';

// TODO:

//1) this page
// floating + button in corner
// media card-like notes
//think of this as google keep-y looking without all the fancy functionality

//2) create page
//submit form

//3) edit note
// same concept as above

//4) backend routes

// markup
const New = () => {
  const classes = useStyles();

  const submitHandler = () => {
    console.log('hello from submit handler');
  };

  return (
    <Layout pageTitle={'New Note'}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <form noValidate autoComplete='off' onSubmit={submitHandler}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField id='standard-basic' label='Standard' />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id='filled-basic'
                    label='Filled'
                    variant='filled'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    multiline
                    id='outlined-basic'
                    label='Outlined'
                    variant='outlined'
                  />
                </Grid>
              </Grid>
              <div>
                <Button type='submit' variant='contained' color='primary'>
                  Save
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default New;
