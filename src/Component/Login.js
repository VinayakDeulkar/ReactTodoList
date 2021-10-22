import React,{useRef,useEffect,useState} from 'react'
import Form  from 'react-bootstrap/Form'
import  Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import  Button  from 'react-bootstrap/Button'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router';
import { Card } from 'react-bootstrap'
const client=axios.create({
    baseURL:"http://localhost:3001/user"
})
export default function Login() {
    const history=useHistory();
    const userName=useRef('');
    const password = useRef('');
    const [LoginData, setLoginData] = useState({Login:[]})
    useEffect(() => {
        client.get()
        .then(res=>{
            setLoginData({Login:res.data })
        })
        let arr=JSON.parse(localStorage.getItem('userdata'))
        if(arr!=undefined){
            history.push("/Homepage")
        }
        
    }, [])
    const login=()=>{
        let uname=userName.current.value;
        let pass=password.current.value;
        
        let found=false
        LoginData.Login.forEach(element=>{
            if((element.UserName===uname||element.Email===uname)&&element.Password===pass){
                found=true
                localStorage.setItem('userdata',JSON.stringify(element))
            }
            
        })
        if(found===true){
            history.push("/Homepage")
        }
        else{
            alert("User not Found!!!")
        }
        
    }
    return (
        <div >
                
                <Row className="mt-5">
                    <Col lg={4}></Col>
                    <Col lg={4}>
                        <Card className="p-5  text-white"style={{backgroundImage:`url("/Images/images.jfif")`}}>
                        <h3>Login Page</h3>
                        <Form  >
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter username/email" ref={userName}/>
                                
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"  ref={password} />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember Me" />
                            </Form.Group>
                            <Button variant="primary" onClick={login} >
                                Login
                            </Button>
                            </Form>
                            <label>Don't have account. <Link to="/Register" className="text-white">Create One</Link></label>
                            </Card>
                        </Col>
                </Row>
                
                    
                
        </div>
    )
}
