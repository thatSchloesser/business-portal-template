import clsx from 'clsx';
import Layout from '../../components/layout';
import useStyles from '../../styles/mui-styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// import NotificationsIcon from '@material-ui/icons/Notifications';

import Deposits from '../../components/samples/Deposits';
import Orders from '../../components/samples/Orders';

// markup
const Sample = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Layout pageTitle={'Dashboard'}>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <p>
              Right now this Dashboard is populated with dummy data.
              <br />
              <br />
              {'<=='} Check out the settings or notes page for functionality
            </p>
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Deposits />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Sample;
