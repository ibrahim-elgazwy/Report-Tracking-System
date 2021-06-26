export function validateAddReport({title, description}){
    if(!title) return _setErrorMessage("title", "Title is required!");

    if(!description) return _setErrorMessage("description", "Description is required!");
    
    if(description.length < 6) return _setErrorMessage("description", "Description should be at least 20 charecters!");

    return {path: '', errMsg: ''};
}


function _setErrorMessage(path, errMsg){
    return {
        path, errMsg
    };
}