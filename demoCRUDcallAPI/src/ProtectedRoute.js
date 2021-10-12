import { Route,Redirect } from "react-router";
import React from "react";

const ProtectedRoute = ({component:Component,isAuth,...rest})=>{
    return (
        <Route 
            {...rest}
            render={()=>{
                if(isAuth){
                    return(
                        <Component />
                    )
                }else{
                    return(
                        <Redirect to='/login' />
                    )
                }
            }}
        />
    )
}

export default ProtectedRoute;