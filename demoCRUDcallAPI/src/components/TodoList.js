import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"
import TodoItem from './TodoItem';
import localStorage from '../localStorage';
import * as action from '../actions'
import './TodoList.scss'

const TodoList = () => {
    const dispatch =  useDispatch();
    const user = localStorage.getToken().user;
    // const [todos,setTodos] = useState([])
    useEffect(()=>{
         dispatch(action.get_all_books());
        
    },[])
    
    const res = useSelector((state)=>state.items.listBook);
    const header = ["id","name","author","age","img"];
    if(user.role=='admin'){
        header.push('tools')
    }
    const tableHeader = header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
     })
    return (
        <div>          
            <table id="students">
                <thead>{tableHeader}</thead>
                <tbody>
                    {res.map((todo)=>{
                        return <TodoItem key={todo.id} todo={todo} />;
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default TodoList;