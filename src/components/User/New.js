import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const UserNew = ({ handleAddUserClick }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [success, setSuccess] = useState(false);
  const [counter, setCounter] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);

  // useEffect dependent on counter
  useEffect(() => {
    const myInterval = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [counter]);

  // when mounted
  useEffect(() => {
    setShowWelcome(true);
    const timeoutId = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // when unmounted
  useEffect(() => {
    return () => {
      alert('Your are leaving users');
    };
  }, []);

  // triggered when any component props/state is changed
  useEffect(() => {
    document.title = `Updated at ${new Date().toLocaleTimeString()}`;
  });

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handleOnclick = () => {
    setSuccess(true);
    handleAddUserClick({ name, surname });
  };

  return (
    <div>
      {showWelcome && <div>Welcome</div>}
      Your are here for {counter} seconds
      <br />
      Name <input name="name" value={name} onChange={handleNameChange} />
      Surname <input value={surname} name="surname" onChange={handleSurnameChange} />
      <button onClick={handleOnclick}>Add</button>
      {success && <div className="notice">User added!</div>}
    </div>
  );
};

UserNew.propTypes = {
  handleAddUserClick: PropTypes.func.isRequired,
};

export default UserNew;
