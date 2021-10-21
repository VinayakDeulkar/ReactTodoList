import React,{useEffect,useRef,useState} from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
export default function TodoForm() {
    const item=useRef('');
    const priority=useRef('');
    const [TodoList, setTodoList] = useState({List:[]})
    const [error, seterror] = useState({err:''})
    useEffect(() => {
        let arr=[]
                arr=JSON.parse(localStorage.getItem('mylist'))
                console.log(arr);
                
                console.log(TodoList.List);
    }, [])
    const addtodo=()=>{
        if(localStorage.getItem('mylist')!=undefined){
            if(item.current.value!=''&&priority.current.value!=''){
                
                console.log(TodoList.List);
                let iddata=Math.random()
                let itemdata=item.current.value;
                let prioritydata=priority.current.value;
                let data={'id':iddata,'task':itemdata,'level':prioritydata}
                console.log(data);
                let arr=[]
                arr=JSON.parse(localStorage.getItem('mylist'))
                console.log(arr);
                arr.push(data)
                localStorage.setItem('mylist',JSON.stringify(arr))
                item.current.value='';
                priority.current.value=''
            }
            else{
                alert("Pls enter the data");
            }
        }
        else{
            let arr=[]
            let iddata=Math.random()
            let itemdata=item.current.value;
            let prioritydata=priority.current.value;
            let data={'id':iddata,'task':itemdata,'level':prioritydata}
            arr.push(data)
            localStorage.setItem('mylist',JSON.stringify(arr))
            item.current.value='';
            priority.current.value=''

        }
    }
    const handle=()=>{
        if(priority.current.value>=1&&priority.current.value<=5){
            seterror({
                err:''
            })
        }
        else{
            seterror({
                err:'Enter Priority between 1 to 5'
            })
        }
    }
    return (
        <div>
            <h3 className="text-center">Todo List</h3>
                    <Form onSubmit={addtodo}>
                        <Row>
                            <Col lg={9}>
                                <Form.Group >
                                    <Form.Label>Add Todo</Form.Label>
                                    <Form.Control type="text" placeholder="Add Todo" name="AddTodo" ref={item}/>
                                </Form.Group>
                            </Col>
                            <Col lg={3}><Form.Group >
                                    <Form.Label>Priority</Form.Label>
                                    <Form.Control type="text"  name="Priority" onChange={handle} ref={priority}/>
                                    <div style={{color:'red'}}>{error.err}</div>
                                </Form.Group>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col>
                            <Button variant="primary" type="submit">
                               Submit
                            </Button>
                            </Col>
                        </Row>
                    </Form>
        </div>
    )
}
