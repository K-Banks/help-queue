import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  return (
    <div>
      <style jsx>{`
        div {
          background-color: red;
        }
        .test {
          font-family: cursive;
        }
        .overwrite:hover {
          color: blue;
        }
      `}</style>
      <h3 className="test">{props.location} - {props.names}</h3>
      <p className="overwrite"><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}


Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
