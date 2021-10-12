import React from 'react'
import LoginComponent from '../components/Login'

const LoginPage = ()=>{
    return (
        <div className="LoginPage" style={{width:'100%',display:'flex',justifyContent:'center',height:'750px',backgroundColor:'#6699FF',alignItems:'center'}}>
            <LoginComponent />
        </div>
    );
}

export default LoginPage;