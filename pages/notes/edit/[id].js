import { useState, useEffect } from 'react';
import { withAuthUser, useAuthUser } from 'next-firebase-auth';

import Router, { useRouter } from 'next/router';
import useStyles from '../../../styles/mui-styles';

import Layout from '../../../components/layout';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const UpdateNote = () => {
  const AuthUser = useAuthUser();
  const classes = useStyles();
  const router = useRouter();

  const { id, title, content } = router.query;

  const [_title, setTitle] = useState(title);
  const [_content, setContent] = useState(content);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    console.log('in effect');
    if (typeof title === 'string') {
      setTitle(title);
    }
    if (typeof content === 'string') {
      setContent(content);
    }
  }, [title, content]);

  async function createNote(e) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const token = await AuthUser.getIdToken();
      const res = await fetch(`/api/notes/update?id=${id}`, {
        method: 'PATCH',
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userid: AuthUser.id,
          title: _title,
          content: _content,
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
    console.log(_title);
  };

  const contentHandler = (e) => {
    setContent(e.target.value);
  };

  return (
    <Layout pageTitle={'Edit Note'}>
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
                    value={_title}
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
                    value={_content}
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

export default withAuthUser()(UpdateNote);
