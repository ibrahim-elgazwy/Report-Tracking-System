import { DELETE_USER, GET_USER, SET_USER } from "../actions/user";
import { getLoginUser } from "../utils/seedsData";


const intialState = {
    user: getLoginUser()
}

const user = (state = intialState, action) => {
    switch(action.type){
        case SET_USER:
            return {
                ...state,
                user: action.user
            };

        case GET_USER:
            return {
                ...state
            };

        case DELETE_USER:
            localStorage.removeItem('user');
            return {
                ...state,
                user: null
            };

        default:
            return state;
    }
}

export default user;