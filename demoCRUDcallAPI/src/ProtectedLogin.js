import { Route,Redirect } from "react-router";
import React from 'react'

const ProtectedLogin = ({component:Component,isAuth,...rest})=>{
    return (
        <Route 
            {...rest}
            render={()=>{
                if(!isAuth){
                    return (
                        <Component />
                    )
                }else{
                    return(
                        <Redirect to='/homepage' />
                    )
                }
            }}
        />
    )
}
export default ProtectedLogin;