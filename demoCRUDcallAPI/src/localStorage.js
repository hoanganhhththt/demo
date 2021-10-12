let getToken = () =>{
    return JSON.parse(localStorage.getItem('user'))
}
let setToken = (token) =>{
    localStorage.setItem('user',JSON.stringify(token))
}
let clearToken = () => {
    localStorage.removeItem('user');
}
export default {
    getToken,
    setToken,
    clearToken
}