import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import './Form.css'

function SignUp(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [userid,setUserid]=useState("");
    const history = useNavigate();
  

    const addUserdata=(e)=>{
        
        e.preventDefault();
        console.log("clciekd");
        axios.post("https://632bf3ef5568d3cad87886a3.mockapi.io/practise-app", {
            name: name,
            email: email,
            userid: userid,
        })
        .then(() => {
            history("/home");
        });

    };


    return (
        <div className="forms text" style={{alignItems: 'center'}}>
            <h1> Sign Up </h1>
            <br/>
        <Form className="squared border border-dark">
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>NAME</Form.Label>
                <Form.Control type="name" placeholder="Enter name"  onChange={(e) => setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicemail">
                <Form.Label>ENTER EMAIL</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicuserid">
                <Form.Label>CREATE USER ID</Form.Label>
                <Form.Control type="userid" placeholder="Enter userid" onChange={(e) => setUserid(e.target.value)}/>
            </Form.Group>

            <button variant="primary" onClick={addUserdata} >
             <Link to="/home">Submit</Link>   
            </button>     
        </Form>
    </div>
    );
}

export default SignUp;