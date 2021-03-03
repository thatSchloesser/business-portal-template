import { useState } from 'react';
import { withAuthUser, useAuthUser } from 'next-firebase-auth';
import Router from 'next/router';
import useStyles from '../../styles/mui-styles';

import Layout from '../../components/layout';
import Grid from '@material-ui/core/Grid';
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
  const AuthUser = useAuthUser();
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function createNote(e) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const token = await AuthUser.getIdToken();
      const res = await fetch('/api/notes/create', {
        method: 'POST',
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userid: AuthUser.id,
          title,
          content,
        }),
      });
      const json = await res.json();
      setSubmitting(false);
      if (!res.ok) throw Error(json.message);
      Router.push('/notes');
    } catch (e) {
      throw Error(e.message);
    }
  }

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentHandler = (e) => {
    setContent(e.target.value);
  };

  return (
    <Layout pageTitle={'New Note'}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <form autoComplete='off' onSubmit={createNote}>
              <Grid container spacing={3}>
                <Grid item md={8} xs={12}>
                  <TextField
                    label='Title'
                    fullWidth
                    multiline
                    required
                    variant='outlined'
                    inputProps={{ maxLength: 45 }}
                    onChange={titleHandler}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label='Note'
                    fullWidth
                    multiline
                    required
                    variant='outlined'
                    rows={7}
                    inputProps={{ maxLength: 500 }}
                    onChange={contentHandler}
                  />
                </Grid>
                <Grid item xs={12}>
                  <div>
                    <Button
                      type='submit'
                      variant='contained'
                      color='primary'
                      disabled={submitting}
                    >
                      {submitting ? 'Saving...' : 'Save'}
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};

//server side render the authuser
// export async function getServerSideProps(context) {
//   const AuthUser = await useAuthUser();
//   console.log(AuthUser);
//   return {
//     props: { AuthUser },
//   };
// }

export default withAuthUser()(New);
