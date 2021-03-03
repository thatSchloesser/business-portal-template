import { useState } from 'react';
import { withAuthUser, useAuthUser } from 'next-firebase-auth';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import CardHeader from '@material-ui/core/CardHeader';

const Note = ({ note, disableEdit }) => {
  const AuthUser = useAuthUser();
  const [view, setView] = useState(true);

  async function deleteHandler() {
    console.log('yo');
    setView(false);
    try {
      const token = await AuthUser.getIdToken();
      const res = await fetch(`/api/notes/delete?id=${note.id}`, {
        method: 'DELETE',
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      });
      const json = await res.json();
      if (!res.ok) throw Error(json.message);
    } catch (e) {
      throw Error(e.message);
    }
  }

  return (
    <>
      {view ? (
        <div>
          <Card>
            <CardHeader title={note.title} />
            <CardContent>{note.content}</CardContent>
            {!disableEdit ? (
              <CardActions>
                <Button color='primary' size='small' disabled>
                  edit
                </Button>
                <Button color='primary' size='small' onClick={deleteHandler}>
                  delete
                </Button>
              </CardActions>
            ) : (
              <></>
            )}
          </Card>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default withAuthUser()(Note);
