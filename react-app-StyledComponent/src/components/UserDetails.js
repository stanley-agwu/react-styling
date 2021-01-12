import React from 'react';
import PropTypes from 'prop-types';

import StyledParagraph from './StyledParagraph';

const UserDetails = props => {
  return (
    <div>
      <StyledParagraph>
        <strong>Name</strong>: {props.name}, <strong>Age</strong>: {props.age}
      </StyledParagraph>
      <p>My name is {props.name} - and I am a {props.job}. These are my details.</p>
    </div>
  );
};

UserDetails.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  job: PropTypes.string
}
UserDetails.defaultProps = {
  name: "Agwu",
  job: "Jobless"
}

export default UserDetails;