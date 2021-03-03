import Layout from '../../components/layout';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import Settings from '../../components/settings';

// markup
const SettingsPage = () => {
  return (
    <Layout pageTitle={'Settings'}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper square>
            <Settings />
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default SettingsPage;
