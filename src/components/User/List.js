import React, { useState } from 'react';

import UserNew from './New';
import UserDetails from './Details';
import MessageHistory from '../../components/MessageHistory/MessageHistory';
import PinnedMessage from '../../components/MessageHistory/PinnedMessage';
import Message from '../../components/MessageHistory/Message';
import BotMessage from '../../components/MessageHistory/BotMessage';

const UserList = () => {
  const initialState = [
    {
      name: 'Example name',
      surname: 'Example surname',
      id: new Date().getTime().toString(),
    },
  ];
  const [users, setUsers] = useState(initialState);

  const handleAddUserClick = (user) => {
    setUsers(
      users.concat({
        name: user.name,
        surname: user.surname,
        id: new Date().getTime().toString(),
      }),
    );
  };

  const user = { name: 'John Doe', id: 'johndoe1' };

  return (
    <div>
      <UserNew handleAddUserClick={handleAddUserClick} />
      <h3>User list Updated</h3>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id}>
            <UserDetails user={user} />
          </li>
        ))}
      </ul>
      <MessageHistory>
        <PinnedMessage text="The last deadline at 23rd March" />
        <Message text="Hello" user={user} />
        <BotMessage text="You have asked me to remind you to deploy at 13:00PM" user={user} />
      </MessageHistory>
    </div>
  );
};

export default UserList;
