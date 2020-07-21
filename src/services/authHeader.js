function authHeader() {
    if(localStorage.getItem('token')) {
        return { Authorization: localStorage.getItem('token') };
    } else {
        return { };
    }
}

export default authHeader;