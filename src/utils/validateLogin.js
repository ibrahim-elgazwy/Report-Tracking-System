import { roles } from "../enums/roles";

const users = [
    {
        email: "employee@hr.com",
        password: "123456",
        role: roles.HR_EMPLOYEE
    },
    {
        email: "supervisor@hr.com",
        password: "123456",
        role: roles.HR_SUPERVISOR
    },
    {
        email: "employee@finance.com",
        password: "123456",
        role: roles.FINANCE_EMPLOYEE
    },
    {
        email: "supervisor@finance.com",
        password: "123456",
        role: roles.FINANCE_SUPERVISOR
    },
    {
        email: "employee@legal.com",
        password: "123456",
        role: roles.LEGAL_EMPLOYEE
    },
    {
        email: "supervisor@legal.com",
        password: "123456",
        role: roles.LEGAL_SUPERVISOR
    }
]

export function validateUser({email, password}){
    if(!email) return _setErrorMessage("email", "Email is required!");

    if(!validateEmail(email)) return _setErrorMessage("email", "Please enter valid email!");

    if(!password) return _setErrorMessage("password", "Password is required!");
    
    if(password.length < 6) return _setErrorMessage("password", "Password should be at least 6 charecters!");

    return {path: '', errMsg: ''};
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function _setErrorMessage(path, errMsg){
    return {
        path, errMsg
    };
}

export function checkUser({email, password}){
    let user = null;

    for(let obj of users){
        if(obj.email === email && obj.password === password) user = obj;
    }

    if(user){
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    }

    return null;
}