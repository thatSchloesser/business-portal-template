// import Link from 'next/link';

import { withAuthUser, AuthAction } from 'next-firebase-auth';
import FullPageLoader from '../../components/FullPageLoader';

import Header from '../header';
import useStyles from '../../styles/mui-styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Stephen Schloesser
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const Layout = ({ children, pageTitle }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header pageTitle={pageTitle} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          {children}
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
};

export default withAuthUser({
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  LoaderComponent: FullPageLoader,
})(Layout);
