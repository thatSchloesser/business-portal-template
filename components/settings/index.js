import { useCallback, useState, useEffect } from 'react';
import { useAuthUser } from 'next-firebase-auth';

import List from '@material-ui/core/List';
import EmailInput from './EmailInput';
import TextInput from './TextInput';
import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';

//TODO

/*
2. load user
3. UPDATE user dg fsdgf 
*/

const Settings = () => {
  const AuthUser = useAuthUser(); // the user is guaranteed to be authenticated
  // console.log(AuthUser);

  const [user, setUser] = useState();
  const fetchUser = useCallback(async () => {
    console.log('in fetch');

    const token = await AuthUser.getIdToken();
    const endpoint = `/api/get-user?id=${AuthUser.id}`;
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
  //second time is after fetchUser is set
  useEffect(() => {
    const getUser = async () => {
      console.log(user);
      const data = await fetchUser();
      console.log(data);
      setUser(data ? data : 'undefined');
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
        <EmailInput value={userData.email} postCallback={f} />
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
