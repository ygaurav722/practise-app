import React, { useState } from "react";
import { useRef } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Form.css'

function SignUp(){
    
    const emailid = useRef();
    const passwd = useRef();
    // const configpasswd=useRef();
    const userid = useRef();

    const [data,setData]=useState({
        emailid:"",
        userid:"",
        password:""
    });

    const addUserdata=()=>{
        

    };


    // const check = (e)=>
    // {
    //     e.preventDefault();
    //     const pass=passwd.current.value;
    //     const confpass=configpasswd.current.value;
    //     const uid=userid.current.value;
    //     const mailid=emailid.current.value;
    //     // console.log(`${passwd}`);
        
    //     if(pass!== confpass) alert(`Password does not match, check password `);
    //     else 
    //     {   
    //         addUserdata(mailid,uid,pass);
    //         alert(`Sign Up successful , Sign In`);
    //         addUserdata(mailid,uid,pass);
    //         window.location.reload(false);      
    //     }
    // };

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
{/* 
            <Form.Group className="mb-3" controlId="formBasicconfigPassword">
                <Form.Label> CONFIRM PASSWORD</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={configpasswd} />
            </Form.Group> */}

            <button variant="primary" onClick={addUserdata} >
             <Link to="/">Submit</Link>   
            </button>     
            {/* <div style={{padding:20}}>
                <Link to="/signin">
                    <p> SignIn </p>
                </Link>
            </div> */}
        </Form>
    </div>
    );
}

export default SignUp;