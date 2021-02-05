import Layout from '../../components/layout';
import useStyles from '../../styles/mui-styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import NotificationsIcon from '@material-ui/icons/Notifications';

// markup
const Template = () => {
  const classes = useStyles();

  return (
    <Layout pageTitle={'Template'}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>* Insert portlet here *</Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Template;
