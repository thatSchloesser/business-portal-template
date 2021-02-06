import { useCallback, useState } from 'react';

import List from '@material-ui/core/List';
import EmailInput from './EmailInput';
import TextInput from './TextInput';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

//TODO

/*
2. load user
3. UPDATE user

*/

const Settings = () => {
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
