import React, { useState } from 'react';

import UserNew from './New';
import UserDetails from './Details';

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
    </div>
  );
};

export default UserList;
