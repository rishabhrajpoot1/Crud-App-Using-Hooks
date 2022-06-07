import React, { useContext } from 'react';
import UserContext from '../Context';
function UserInterface() {
  const user = useContext(UserContext);
  const data = JSON.parse(localStorage.getItem('data')) || [];
  console.log(data, user, 'data');
  return (
    <>
      {user?.data?.map((details, i) => (
        <div>
          <label contentEditable={true}>{details.name}</label>
          <label contentEditable={true}>{details.username}</label>
          <span onClick={() => user.handleDelete(i)}>X</span>
        </div>
      ))}
    </>
  );
}

export default UserInterface;
