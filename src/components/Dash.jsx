import React from 'react'
//authentcation redux
import { connect } from 'react-redux';
import { logoutUser } from '../redux/actions/userActions';
//router
import { useHistory } from 'react-router-dom';

const Dash = ({logoutUser}) => {
    const history = useHistory();
  return (
    <div>
      <div
        style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: "transparent",
            width: "100%",
            padding: "15px",
            display: "flex",
            justifyContent: "flex-start",
             }}
        >
        <h1>Welcom, User</h1>
        <br />
        <button to='#' onClick={() => logoutUser} className='btn btn-primary'>Logout</button>
        </div>
      </div>
)
}

export default connect(null, {logoutUser})(Dash);
