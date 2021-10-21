import React from 'react'
import { Button, Nav,Navbar } from 'react-bootstrap'
import { useHistory } from 'react-router';

export default function Navs() {
    const history=useHistory();
    const logout=()=>{
        localStorage.clear();
        history.push("/")
    }
    return (
        <div>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Todo List</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            </Nav>
            <Button variant="outline-light" onClick={logout}>Logout</Button>
            </Navbar.Collapse>
        </Navbar>
        </div>
    )
}
