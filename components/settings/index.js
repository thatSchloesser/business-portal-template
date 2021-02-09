import { useCallback, useState, useEffect, useRef } from 'react';
import { useAuthUser } from 'next-firebase-auth';

import List from '@material-ui/core/List';
import EmailInput from './EmailInput';
import Label from './Label';
import TextInput from './TextInput';
import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
// import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

//TODO

/*
3. UPDATE user  

~  update button in parent component
~    state change
  update input: get callback function working:
  post update call: 
    create the object with passed value instead of updating state. 
      (But lookup how to efficiently update state of an OBJECT)
*/

const Settings = () => {
  const AuthUser = useAuthUser(); // the user is guaranteed to be authenticated
  let email = useRef('error');

  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState({});

  const fetchUser = useCallback(async () => {
    const token = await AuthUser.getIdToken();
    const endpoint = `/api/user/get?id=${AuthUser.id}`;
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      // eslint-disable-next-line no-console
      console.error(
        `Data fetching failed with status ${response.status}: ${JSON.stringify(
          data
        )}`
      );
      return null;
    }
    return data;
  }, [AuthUser]);

  const updateUser = useCallback(
    async (value) => {
      try {
        const token = await AuthUser.getIdToken();
        const res = await fetch('/api/user/edit', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
          body: JSON.stringify(value),
        });
        const json = await res.json();
        if (!res.ok) throw Error(json.message);

        //TRIGGER SAVE ALERT BADGE HERE!
      } catch (e) {
        throw Error(e.message);
      }
    },
    [AuthUser]
  );

  const discardChanges = () => {
    setEdit(false);
  };

  //this gets called at least twice on page load:
  //second time is after fetchUser is set (hence dependency)
  useEffect(() => {
    const getUser = async () => {
      console.log(user);
      const data = await fetchUser();
      console.log(data);
      console.log(setUser);
      await setUser(data ? data : 'undefined');
      const updateEmail = (val) => {
        data.email = val;
        updateUser(data);
        console.log('updated!');
        setEdit(false);
      };
      email.current = (
        <EmailInput
          postCallback={updateEmail}
          discardChanges={discardChanges}
        />
      );
    };
    getUser();

    console.log(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchUser, updateUser]);

  return (
    <>
      {/* <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' /> */}
      {/* <Divider /> */}
      <List>
        {/* email */}
        {/* {email.current} */}
        <Label label='Email'>
          {edit ? (
            <>{email.current}</>
          ) : (
            <>
              <ListItemText>{user.email}</ListItemText>
              <ListItemSecondaryAction>
                <IconButton
                  edge='end'
                  aria-label='edit'
                  onClick={() => setEdit(true)}
                  key='button'
                >
                  <EditIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </>
          )}
        </Label>
        <Divider />
        <TextInput
          label={'Given Name'}
          value={user.first_name}
          // postCallback={f}
        />
        <Divider />
        <TextInput
          label={'Surname'}
          value={user.last_name}
          // postCallback={f}
        />
        {/* <ListItem button>
          <ListItemText>Email </ListItemText>
        </ListItem> */}
      </List>
    </>
  );
};

export default Settings;
