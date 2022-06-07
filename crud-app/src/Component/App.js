import React, { useState, useEffect } from 'react';
import { UserProvider } from '../Context';
import UserInterface from './UserInterface';
function App() {
  let [name, setName] = useState('');
  let [userName, setUserName] = useState('');
  let [userDelete, setUserDelete] = useState(true);

  function onSubmit(event) {
    event.preventDefault();
    if (name !== '' && userName !== '') {
      const localData = JSON.parse(localStorage.getItem('data')) || [];

      localStorage.setItem(
        'data',
        JSON.stringify([...localData, { username: userName, name: name }])
      );

      setName('');
      setUserName('');
    }
  }
  useEffect(() => {}, [userDelete]);
  function handleDelete(i) {
    console.log(i);
    let array = JSON.parse(localStorage.getItem('data'));
    array.splice(i, 1);

    localStorage.setItem('data', JSON.stringify([...array]));
    setUserDelete(!userDelete);
  }
  return (
    <>
      <form>
        <input
          value={name}
          type='text'
          placeholder='enter the name'
          onChange={(event) => setName(event.target.value)}
          name='name'
        />
        <input
          value={userName}
          type='text'
          placeholder='enter the username'
          onChange={(event) => setUserName(event.target.value)}
          name='username'
        />
        <input onClick={onSubmit} value='submit' type='submit' />
      </form>
      <UserProvider
        value={{
          data: JSON.parse(localStorage.getItem('data')),
          handleDelete: handleDelete,
        }}
      >
        <UserInterface />
      </UserProvider>
    </>
  );
}
export default App;
