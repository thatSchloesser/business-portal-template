import { useCallback, useState, useEffect, useRef } from 'react';
import { useAuthUser } from 'next-firebase-auth';

import List from '@material-ui/core/List';
import EmailInput from './EmailInput';
import EmailLabel from './EmailLabel';
import TextInput from './TextInput';
import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';

//TODO

/*
3. UPDATE user  

  update button in parent component
    state change
  update input: get callback function working:
  post update call: 
    create the object with passed value instead of updating state. 
      (But lookup how to efficiently update state of an OBJECT)
*/

const Settings = () => {
  const AuthUser = useAuthUser(); // the user is guaranteed to be authenticated
  let email = useRef(null);

  let [edit, setEdit] = useState(false);

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

  //this gets called twice on page load:
  //second time is after fetchUser is set (hence dependency)
  useEffect(() => {
    const getUser = async () => {
      console.log(user);
      const data = await fetchUser();
      console.log(data);
      await setUser(data ? data : 'undefined');
      email.current = <EmailInput value={data.email} postCallback={f} />;
    };
    getUser();

    console.log(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchUser]);

  let userData = {
    email: 'test@test.com',
    firstName: 'bob',
    lastName: 'Yolo',
  };

  const f = (val) => console.log('hi from callback', val);

  return (
    <>
      {/* <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' /> */}
      {/* <Divider /> */}
      <List>
        asdfasdfds
        {edit ? 'true' : 'false'}
        {edit ? (
          email.current
        ) : (
          <EmailLabel>
            {user.email}
            <IconButton
              edge='end'
              aria-label='edit'
              onClick={() => setEdit(true)}
            >
              <EditIcon />
            </IconButton>
          </EmailLabel>
        )}
        <Divider />
        <TextInput
          label={'Given Name'}
          value={userData.firstName}
          postCallback={f}
        />
        <Divider />
        <TextInput
          label={'Surname'}
          value={userData.lastName}
          postCallback={f}
        />
        {/* <ListItem button>
          <ListItemText>Email </ListItemText>
        </ListItem> */}
      </List>
    </>
  );
};

export default Settings;
