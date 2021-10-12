import React,{useState}  from "react";
import {Button, Image} from 'antd'
import * as action from "../actions"
import { useDispatch } from "react-redux";

const TodoItem = ({todo}) =>{
    const dispatch= useDispatch();
    const [edit,setEdit] = useState(false);
    const [id,setId] = useState(1)
    const [name,setName] = useState("");
    const [author,setAuthor]= useState("");
    const [age,setAge] = useState(0);
    const [img,setImg] = useState("");
    const logo = require('../image/'+todo.img);
    function ImageDemo(src) {
        return (
          <Image
            width={20}
            src={src}
          />
        );
      }
    return (
        <>
            <tr className="">
                <td>#{todo.id}</td>
                {edit ?(
                    <td><input type="text" onChange={(e)=>setName(e.target.value)} value={name}></input></td>
                    ):(
                    <td>{todo.name}</td>
                )}
                {edit ?(
                    <td><input type="text" onChange={(e)=>setAuthor(e.target.value)} value={author}></input></td>
                    ):(
                    <td>{todo.author}</td>
                )}
                {edit ?(
                    <td><input type="number" onChange={(e)=>setAge(e.target.value)} value={age}></input></td>
                    ):(
                    <td>{todo.age}</td>
                )}
                {edit ?(
                    <td><input type="text" onChange={(e)=>setImg(e.target.value)} value={img}></input></td>
                    ):(
                    <td>{ImageDemo(logo)}</td>
                )}
                <td><Button type="primary" onClick={()=>{
                    if(edit){
                        setName(todo.name);
                        setAuthor(todo.author);
                        setAge(todo.age);
                        setImg(todo.img);
                        dispatch(action.update_a_book({
                            ...todo,
                            id:id,
                            name: name,
                            author:author,
                            age:age,
                            img: img
                        }))
                    }   
                        setId(todo.id)
                        setName(todo.name);
                        setAuthor(todo.author);
                        setAge(todo.age);
                        setImg(todo.img);
                        setEdit(!edit)}} >
                    {edit?"Update":"Edit"}
                </Button>
                <Button type="primary" onClick={()=>dispatch(action.delete_a_book(todo.id))} danger>
                    Delete
                </Button></td>
                
            </tr>
        </>
    )
}
export default TodoItem; 