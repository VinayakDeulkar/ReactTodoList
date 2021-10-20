import React,{useEffect,useRef} from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
export default function TodoForm() {
    const item=useRef('');
    const priority=useRef('');
    useEffect(() => {
        let arr=JSON.parse(localStorage.getItem('mylist'))
    }, [])
    const addtodo=()=>{
        
    }
    return (
        <div>
            <h3 className="text-center">Todo List</h3>
                    <Form>
                        <Row>
                            <Col lg={9}>
                                <Form.Group >
                                    <Form.Label>Add Todo</Form.Label>
                                    <Form.Control type="text" placeholder="Add Todo" name="AddTodo" ref={item}/>
                                </Form.Group>
                            </Col>
                            <Col lg={3}><Form.Group >
                                    <Form.Label>Priority</Form.Label>
                                    <Form.Control type="text"  name="Priority" ref={priority}/>
                                </Form.Group>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col>
                            <Button variant="primary" onClick={addtodo}>
                               Submit
                            </Button>
                            </Col>
                        </Row>
                    </Form>
        </div>
    )
}
