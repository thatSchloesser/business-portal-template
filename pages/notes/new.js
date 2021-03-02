import { useState } from 'react';
import Router from 'next/router';

import Layout from '../../components/layout';

import Grid from '@material-ui/core/Grid';
import useStyles from '../../styles/mui-styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';

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

  const [submitting, setSubmitting] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/notes/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          hi: 'hi',
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

  const titleHandler = (e) => {};

  return (
    <Layout pageTitle={'New Note'}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <form autoComplete='off' onSubmit={submitHandler}>
              <Grid container spacing={3}>
                <Grid item md={8} xs={12}>
                  <TextField
                    required={true}
                    fullWidth
                    multiline
                    id='1'
                    label='Title'
                    variant='outlined'
                    inputProps={{ maxLength: 45 }}
                    // onChange={titleHandler}
                    // error={titleE}
                    // helperText={titleHelper}
                  />
                </Grid>
                <Grid item xs={12}>
                  {/* <TextareaAutosize /> */}

                  <TextField
                    fullWidth
                    multiline
                    id='2'
                    label='Note'
                    variant='outlined'
                    required={true}
                    rows={7}
                    inputProps={{ maxLength: 500 }}
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

export default New;
