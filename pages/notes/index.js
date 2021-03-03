import Layout from '../../components/layout';
import Note from '../../components/note';

import useStyles from '../../styles/mui-styles';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import getAbsoluteURL from '../../utils/getAbsoluteURL';

import { withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth';

// TODO:

//3) edit /delete note
// same concept as above

// markup
const Notes = ({ notes }) => {
  const classes = useStyles();

  console.log(notes);

  const emptyNote = {
    title: 'No Notes Found!',
    content: 'Go ahead and click that plus button',
  };

  let noteCards = [];
  notes.forEach((note) => {
    noteCards.push(
      <Grid item xs={12} md={4}>
        <Note note={note} />
      </Grid>
    );
  });
  return (
    <Layout pageTitle={'Notes'}>
      <Grid container spacing={3}>
        {notes.length > 0 ? (
          noteCards
        ) : (
          <Grid item xs={12} md={4}>
            <Note note={emptyNote} />
          </Grid>
        )}
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
    const token = await AuthUser.getIdToken();
    // const endpoint = getAbsoluteURL(`/api/notes/get?id=${AuthUser.id}`, req);
    const endpoint = getAbsoluteURL(`/api/notes/get`, req);
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    });
    const notes = await response.json();
    if (!response.ok) {
      console.error(
        `Data fetching failed with status ${response.status}: ${JSON.stringify(
          notes
        )}`
      );
      return null;
    }

    return {
      props: { notes },
    };
  }
);

export default withAuthUser()(Notes);
