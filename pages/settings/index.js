import Layout from '../../components/layout';
import useStyles from '../../styles/mui-styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import { useAuthUser } from 'next-firebase-auth';

// markup
const Settings = () => {
  const classes = useStyles(); //I need this to be a prop in the _app component
  const AuthUser = useAuthUser();
  console.log(AuthUser);

  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper} square>
            Settings page!
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Settings;
