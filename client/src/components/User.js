import React from 'react';

const log = {
    firstName: 'Erin',
    lastName: 'Peters',
  };

  const User = () => (
    <div>
        <h1>Hello, {log.firstName + ' ' + log.lastName}.</h1>
    </div>
      
  );
  

  export default User;