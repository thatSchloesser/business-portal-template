import Layout from '../../components/layout';
import Note from '../../components/note';

import useStyles from '../../styles/mui-styles';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import getAbsoluteURL from '../../utils/getAbsoluteURL';

import { withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth';

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
const Notes = ({ notes }) => {
  const classes = useStyles();

  console.log(notes);

  const note = {
    title: 'some title',
    content: 'some content that is nifty',
  };

  return (
    <Layout pageTitle={'Notes'}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Note note={note} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Note note={note} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Note note={note} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Note note={note} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Note note={note} />
        </Grid>
      </Grid>
      <Link href='/notes/new'>
        <Fab color='primary' aria-label='add' className={classes.cornerButton}>
          <AddIcon />
        </Fab>
      </Link>
    </Layout>
  );
};

export const getServerSideProps = withAuthUserTokenSSR()(
  async ({ AuthUser, req }) => {
    console.log('hi from server', AuthUser);
    const token = await AuthUser.getIdToken();
    const endpoint = getAbsoluteURL(`/api/notes/get?id=${AuthUser.id}`, req);
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      console.error(
        `Data fetching failed with status ${response.status}: ${JSON.stringify(
          data
        )}`
      );
      return null;
    }
    let notes = data;
    console.log(notes);

    return {
      props: { notes }, // will be passed to the page component as props
    };
  }
);

export default withAuthUser()(Notes);
