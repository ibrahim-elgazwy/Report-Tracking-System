export const GET_USER = 'GET_USER';
export const SET_USER = 'SET_USER';
export const DELETE_USER = 'DELETE_USER';

export const addUser = (user) => dispatch => {
    dispatch({
        type: SET_USER,
        user,
    });
}

export const deleteUser = (id) => dispatch => {
    dispatch({
        type: DELETE_USER,
        id
    });
}

export const getUser = () => dispatch => {
    dispatch({
        type: GET_USER
    });
}