import React,{useEffect} from 'react'
import {  Col,  Row, Table } from 'react-bootstrap'
import { useHistory } from 'react-router';
import TodoForm from './TodoForm';
import TodoTable from './TodoTable';

export default function Homepage() {
    const history=useHistory();
    useEffect(() => {
        
        let arr=JSON.parse(localStorage.getItem('userdata'))
        if(arr==undefined){
            history.push("/")
        }
        
    }, [])
    return (
        <div>
            <Row>
                <Col lg={3}>
                </Col>
                <Col lg={6} className=" mt-5">
                    <TodoForm/>
                    <TodoTable/>
                </Col>
            </Row>
        </div>
    )
}
