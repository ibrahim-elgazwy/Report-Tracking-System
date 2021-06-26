import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteUser } from '../../actions/user';
import './navbar.css';

const Navbar = ({deleteUser, user}) => {
    const history = useHistory();

    const handlleLogout = () => {
        deleteUser(user);
        history.replace('/login');
    }

    return ( 
        <nav>
            <h3 onClick={() => history.push('/')}>RTS</h3>
            {user && <button className="btn-inline" onClick={handlleLogout}>Logout</button>}
        </nav>
     );
}
 
const mapStateToProps = state => ({
    user: state.user.user,
});

export default connect(mapStateToProps, {deleteUser})(Navbar);