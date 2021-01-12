import React, { useState } from 'react';

import UserDetails from './UserDetails';
import Button from './Button';

const UserSummary = () => {
  const [detailsVisible, setDetailsVisible] = useState(false);

  return (
    <section>
      <p style={{ color: '#666'}}>
        You can view the details for the user by clicking the button.
      </p>
      <div
        style={{
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.26)',
          padding: '1rem',
          borderRadius: '10px'
        }}
      >
        <h2>5 Stack Dev</h2>
        <Button onClick={() => setDetailsVisible(checkVisible => !checkVisible)}>
          {detailsVisible ? 'Hide' : 'Show'} Details
        </Button>
        {detailsVisible && <UserDetails name="Stanley" age="32" />}
      </div>
    </section>
  );
};

export default UserSummary;