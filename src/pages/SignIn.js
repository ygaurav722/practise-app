import { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Form.css'
 

function SignIn(){

    const id = useRef();
    const passwd = useRef();

    return(
        <div className="text" style={{alignItems: 'center'}}>
            <div > 
                <h1 >Sign In</h1>
            </div>
            <div className="forms">
            <Form className="square border border-dark ">
                <Form.Group className="mb-3" controlId="formBasicuserid">
                    <Form.Label>USER ID</Form.Label>
                    <Form.Control type="userid" placeholder="Enter userid" ref={id} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>PASSWORD</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={passwd}/>
                </Form.Group>

                <Button variant="primary" >
                    Submit
                </Button>
            </Form>
        </div>
    </div>

    );
}

export default SignIn;