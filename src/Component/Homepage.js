import React,{useEffect} from 'react'
import {  Card, Col,    Row } from 'react-bootstrap'
import { Route, useHistory } from 'react-router';
import Navs from './Navs';
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
                <Col>
                <Navs/>
                </Col>
            </Row>
            <Row>
                
                <Col lg={3}>
                </Col>
                
                <Col lg={6} className=" mt-5">
                    <Card className="p-3">
                    <Route path="/Homepage" exact component={TodoForm}/>
                    <Route path="/Homepage" exact component={TodoTable}/>
                    </Card>
                </Col>
                
            </Row>
        </div>
    )
}
