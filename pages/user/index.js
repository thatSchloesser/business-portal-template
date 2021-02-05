import Layout from '../../components/layout';
import useStyles from '../../styles/mui-styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import NotificationsIcon from '@material-ui/icons/Notifications';

// markup
const Settings = () => {
  const classes = useStyles(); //put this in the app part\

  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper} square>
            user page?
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Settings;
