import React, {useState} from "react";
import { useDispatch } from "react-redux";
import * as action from '../actions'
import { Button,Input, Modal} from "antd";
const TodoInput = ()=>{
    const dispatch = useDispatch();
    const [name,setName] = useState("");
    const [author,setAuthor]= useState("");
    const [age,setAge] = useState(0);
    const [img,setImg] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
      };
    const handleCancel = () => {
        setIsModalVisible(false);
      };
    const handleAddTodo = () =>{
        
        if(name!==''&&img!==''&&age!==0&&author!==""){
        dispatch(action.create_a_book({
            name: name,
            author:author,
            age:age,
            img: img
        }))}
        setName("");
        setAuthor("");
        setAge(0);
        setImg("");
        setIsModalVisible(false);
    }

    return(
        <>
            <div className= "">
                <Button type="primary" onClick={showModal} style={{float:"right"}}>
                    Add
                </Button>
                <Modal title="Add Items" visible={isModalVisible} onOk={handleAddTodo} onCancel={handleCancel}>
                    <p>Name</p>
                    <Input 
                        type="text"
                        size = "medium"
                        onChange={(e)=>setName(e.target.value)}
                        value={name}
                    />
                    <p>Author</p>
                    <Input 
                        type="text"
                        size = "medium"
                        onChange={(e)=>setAuthor(e.target.value)}
                        value={author}
                    />
                    <p>Age</p>
                    <Input 
                        type="number"
                        size = "medium"
                        onChange={(e)=>setAge(e.target.value)}
                        value={age}
                    />
                    <p>Image</p>
                    <Input 
                        type="text"
                        onChange={(e)=>setImg(e.target.value)}
                        value={img}
                        className=""
                    />
                </Modal>
            </div>
        </>
    )
}
export default TodoInput;