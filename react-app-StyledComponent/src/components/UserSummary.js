import React, { useState } from 'react';

import UserDetails from './UserDetails';
import Button from './Button';
import StyledParagraph from './StyledParagraph';

const UserSummary = () => {
  const [detailsVisible, setDetailsVisible] = useState(false);

  return (
    <section>
      <StyledParagraph>
        You can view the details for the user by clicking the button.
      </StyledParagraph>
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
        {detailsVisible && <UserDetails name="Stanley" age="32" job="Front-end Developer" />}
      </div>
    </section>
  );
};

export default UserSummary;