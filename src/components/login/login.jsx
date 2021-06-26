import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../actions/user';
import { validateUser, checkUser} from '../../utils/validateLogin';
import './login.css';

const Login = ({history, addUser}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({path: '', errMsg: ''});

    const handleLogin = async e => {
        e.preventDefault();
        if(error && error.path) return;
        const user = checkUser({email, password});
        if(user) {
            addUser(user);
            history.replace('/');
        }
        else setError({path: 'email', errMsg: 'Incorrect email or password'})
    }

    const checkUserInfo = () => {
        const {path, errMsg} = validateUser({email, password});
        if(path === 'email' && email) return setError({path, errMsg});
        if(path === 'password' && password) return setError({path, errMsg});
        setError({path: '', errMsg: ''});
    }

    const checkError = () => {
        if(error && error.path) checkUserInfo();
    }

    return ( 
        <div className="col-md-8 col-xs-12 form-container">
            <form onSubmit={handleLogin}>
                <h4 className="text-center">Login</h4>        
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input id="email" 
                           type="text" 
                           className="form-input" 
                           name="email" 
                           value={email} 
                           onChange={(e) => {setEmail(e.target.value); checkError()}}
                           onBlur={checkUserInfo}
                           autoComplete="off"/>
                </div>
                {(error && error.path === 'email') && <div className="error m-2">{error.errMsg}</div>}
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                           id="password"  
                           className="form-input" 
                           name="password" 
                           value={password} 
                           onChange={(e) => {setPassword(e.target.value); checkError()}}
                           onBlur={checkUserInfo}
                           autoComplete="off" />
                </div>
                {(error && error.path === 'password') && <div className="error m-2">{error.errMsg}</div>}
                <div className="d-grid gap-2 mt-3">
                    <button disabled={!email || !password} className="form-btn" type="submit">Login</button>
                </div>
            </form>  
        </div>
    )
}

export default connect(null, {addUser})(Login);
