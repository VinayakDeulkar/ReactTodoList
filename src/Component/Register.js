import React,{useRef,useState} from 'react'
import { Form, Row ,Col,Button, Card} from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
const client=axios.create({
    baseURL:"http://localhost:3001/user"
})
export default function Register() {
    const history=useHistory();
    const fname = useRef('');
    const lastname=useRef('');
    const username=useRef('');
    const email = useRef('');
    const password=useRef('');
    const confirmpassword=useRef('');
    const [state, setstate] = useState({ename:'',elastname:'',eusername:'',eemail:'',epassword:'',econfirmpass:''})
    const regForName=RegExp(/^[A-Za-z ]+$/);
    const regForEmail=RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);
    const regForpassword=RegExp(/[A-Za-z0-9 @#%$&*]+/)
    const handler=(event)=>{
        const {name}=event.target;
        console.log(name);
        
        switch(name){ 
            case 'Name':
                let en=regForName.test(fname.current.value)?'':'Only Aplhabates are allowed';
                setstate({
                    ename:en
                })
                break;
            case 'Lastname':
                let ln=regForName.test(lastname.current.value)?'':'Only Aplhabates are allowed';
                setstate({
                    elastname:ln
                })
                break;
            case 'username':
                let eu=regForName.test(username.current.value)?'':'Only Aplhabates are allowed';
                setstate({
                    eusername:eu
                })
                break;
            case 'email':
                let ee=regForEmail.test(email.current.value)?'':'Enter Valid Email';
                setstate({
                    eemail:ee
                })
                break;
            case 'password':
                let ep=regForpassword.test(password.current.value)?'':'Enter Valid Password';
                setstate({
                    epassword:ep
                })
                break;
            case 'confirmpassword':
                let ecp=password.current.value===confirmpassword.current.value?'':'Password must be same';
                setstate({
                    econfirmpass:ecp
                })
                break;
            default:
                break;    
        }
    }
    const adddata=(event)=>{
        event.preventDefault();
        const formdata={Name:fname.current.value,LastName:lastname.current.value,UserName:username.current.value,Email:email.current.value,Password:password.current.value,ConfirmPassword:confirmpassword.current.value}
        console.log(formdata);
        client.post("/",formdata)
        if(state!==""){
            history.push("/")
        }
        else{
            history.push("/Register")
        }
    }
    return (
        <div>
            <Row className="mt-4">
               
                <Col lg={4}></Col>
                <Col lg={4}>
                    <Card className="p-5 text-white "style={{backgroundImage:`url("/Images/images.jfif")`}}>
                    <h2>Registration Form</h2>
                    <Form onSubmit={adddata}>
                    <Form.Group >
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" name="Name" onChange={handler} ref={fname}/>
                    </Form.Group>
                    <div style={{color:'red'}}>{state.ename}</div>
                    <Form.Group >
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" name="Lastname" onChange={handler} ref={lastname}/>
                    </Form.Group>
                    <div style={{color:'red'}}>{state.elastname}</div>
                    <Form.Group >
                                <Form.Label>UserName</Form.Label>
                                <Form.Control type="text" placeholder="User Name" name="username" onChange={handler} ref={username}/>
                    </Form.Group>
                    <div style={{color:'red'}}>{state.eusername}</div>
                    <Form.Group >
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Email" name="email" onChange={handler} ref={email}/>
                    </Form.Group>
                    <div style={{color:'red'}}>{state.eemail}</div>
                    <Form.Group >
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" onChange={handler} ref={password}/>
                    </Form.Group>
                    <div style={{color:'red'}}>{state.epassword}</div>
                    <Form.Group >
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" name="confirmpassword" onChange={handler} ref={confirmpassword}/>
                    </Form.Group>
                    <div style={{color:'red'}}>{state.econfirmpass}</div>
                    <Button variant="primary" type="submit">
                                Submit
                            </Button>
                    </Form>
                    <label>Already Register? <Link to="/" className="text-white">Click Here</Link></label>
                    </Card>
                </Col>
            </Row>
            
        </div>
    )
}
