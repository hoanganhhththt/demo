import React from 'react';
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'
import localStorage from '../localStorage';
import { Button } from 'antd/lib/radio';
// import * as action from '../actions/index'
// import { useDispatch } from "react-redux";

const HomePage = () =>{
    const ava = require('../image/vnpay.jpg');
    const user = localStorage.getToken().user; 
    return (
      <div className="HomePage" style={{display:"flex",height:'750px',position:'relative', flexDirection:"row",width:'90%',marginLeft:'5%',backgroundColor:"#FAFAFA"}}>
          <div style={{width:'13.5%',height:'100%',position:'fixed',backgroundColor:'#000'}}>
            <img src={ava} style={{width:'70%',marginLeft:'15%',marginTop:'20%',marginBottom:'20%'}}></img>
            <h2 style={{color:'white',textAlign:'center'}}>{user.userName}</h2>
            <p style={{color:'white',textAlign:'center'}}>{user.phone}</p>
            <p style={{color:'white',textAlign:'center'}}>{user.role}</p>
            <Button type='primary' style={{width:'50%',marginLeft:'25%'}} onClick={async ()=>{
              await localStorage.clearToken();
              window.location.reload()
            }}>
                Đăng Xuất
            </Button>
          </div>
          <div style={{width:'85%',position:'absolute',left:'15%'}}>
            <h1 style={{textAlign:'center',marginTop:'3%'}}> Bảng thống kê sản phẩm </h1>
            <TodoList />
            <TodoInput />
          </div>
      </div>
    );
  }

export default HomePage;

