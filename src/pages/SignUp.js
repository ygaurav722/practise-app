import React from "react";
import { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import './Form.css'

function SignUp(){
    
    const emailid = useRef();
    const passwd = useRef();
    const configpasswd=useRef();
    const userid = useRef();
    

    const check = (e)=>
    {
        e.preventDefault();
        const passwd=passwd.current.value;
        const confpass=configpasswd.current.value;
        const uid=userid.current.value;
        if(passwd!= confpass) alert(`Password does not match, check password `);
        else 
        {
            alert(`Sign Up successful`);
        }

    };

    return (
        <div className="forms text" style={{alignItems: 'center'}}>
            <h1> Sign Up </h1>
            <br/>
        <Form className="squared border border-dark">
            <Form.Group className="mb-3" controlId="formBasicemail">
                <Form.Label>ENTER EMAIL</Form.Label>
                <Form.Control type="email" placeholder="Enter email" ref={emailid} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicuserid">
                <Form.Label>CREATE USER ID</Form.Label>
                <Form.Control type="userid" placeholder="Enter userid" ref={userid} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>PASSWORD</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={passwd}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicconfigPassword">
                <Form.Label> CONFIRM PASSWORD</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={configpasswd} />
            </Form.Group>

            <Button variant="primary" onSubmit={check} >
                Submit
            </Button>
        </Form>
        <div>
            
        </div>
    </div>
    );
}

export default SignUp;