import Layout from '../../components/layout';
import useStyles from '../../styles/mui-styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

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

  return (
    <Layout pageTitle={'Notes'}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            * Insert portlet here *
            <div>
              <Link href='/'>
                <Button color='primary' href='#'>
                  new
                </Button>
              </Link>
            </div>
          </Paper>
        </Grid>
      </Grid>
      <Link href='/'>
        <Fab color='primary' aria-label='add' className={classes.cornerButton}>
          <AddIcon />
        </Fab>
      </Link>
    </Layout>
  );
};

export default New;
