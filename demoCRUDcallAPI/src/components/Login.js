import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { Button,Input} from "antd";
import * as action from '../actions'


const LoginComponent = () =>{
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div>
            {
                isLogin
                    ?
                    <LoginForm openRegester={() => setIsLogin(false)} />
                    :
                    <RegesterForm  openLogin={() => setIsLogin(true)} />
            }
        </div>
    );
}

const LoginForm = (props) =>{
    const {openRegester} = props;
    const dispatch = useDispatch();
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    return (
        <div style={{width:'400px'}}>
            <div style={{height:'80px',backgroundColor:'#1890ff'}}>
                <p style={{color:'white',textAlign:'center',fontSize:'40px'}}>Login</p>
            </div>
            <div style={{backgroundColor:'#FAFAFA'}}>
                <Input 
                    type="text"
                    placeholder="  Username"
                    size = 'medium'
                    style = {{margin:'20px 5% 10px 5%',width:'90%'}}
                    onChange={(e)=>setUserName(e.target.value)}
                />
                <Input 
                    type="text"
                    placeholder="  Password"
                    size = "medium"
                    style = {{margin:'20px 5% 10px 5%',width:'90%'}}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <Button type="primary" size="large" style={{margin:'20px 5% 10px 5%',width:'90%'}} onClick={()=>{
                    dispatch(action.loginRequest({userName:userName,password:password}))
                }}>Đăng nhập</Button>
                <Button type="primary" size="large" style={{margin:'20px 5% 40px 5%',width:'90%'}} onClick={() => {
                    openRegester()
                }}>Đăng kí</Button>
            </div>
        </div>
    )
}

const RegesterForm = (props) => {
    const {openLogin} = props;
    const dispatch = useDispatch();
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [phone, setPhone] = useState(0);
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        <div style={{width:'400px'}}>
            <div style={{height:'80px',backgroundColor:'#1890ff'}}>
                <p style={{color:'white',textAlign:'center',fontSize:'40px'}}>Register</p>
            </div>
            <div style={{backgroundColor:'#FAFAFA'}}>
                <Input 
                    type="text"
                    placeholder="  Username"
                    size = 'medium'
                    style = {{margin:'20px 5% 10px 5%',width:'90%'}}
                    onChange={(e)=>setUserName(e.target.value)}
                />
                <Input 
                    type="text"
                    placeholder="  Phone Number"
                    size = 'medium'
                    style = {{margin:'20px 5% 10px 5%',width:'90%'}}
                    onChange={(e)=>setPhone(e.target.value)}
                />
                <Input 
                    type="text"
                    placeholder="  Password"
                    size = 'medium'
                    style = {{margin:'20px 5% 10px 5%',width:'90%'}}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <Input 
                    type="text"
                    placeholder="  Confirm Password"
                    size = "medium"
                    style = {{margin:'20px 5% 10px 5%',width:'90%'}}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                />
                <Button type="primary" size="large" style={{margin:'20px 5% 10px 5%',width:'90%'}} onClick={()=>{
                    if(userName!==''&&password!==''&&confirmPassword!==''&&phone!==0&&password===confirmPassword){
                        dispatch(action.regesterRequest({userName:userName,phone:phone,password:password}));
                    }
                }}>Đăng kí</Button>
                <Button type="primary" size="large" style={{margin:'20px 5% 40px 5%',width:'90%'}}  onClick={() => {
                    openLogin()
                }}>Quay lại đăng nhập</Button>
            </div>
        </div>
    )
}



export default LoginComponent;