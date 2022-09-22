
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import './Form.css'
 

function Update(){

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [userid,setUserid]=useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setUserid(localStorage.getItem("userid"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
      }, []);

      const handleUpdate = (e) => {
        e.preventDefault();
        console.log("Id...", id);
        axios.put(`https://632bf3ef5568d3cad87886a3.mockapi.io/practise-app/${id}`, {
            name: name,
            email: email,
            userid: userid
          })
          .then(() => {
            navigate("/");
          });
      };

    return(
        <div className="text" style={{alignItems: 'center'}}>
            <div > 
                <h1 >Update</h1>
            </div>
            <div className="forms">
            <Form className="square border border-dark ">
                <Form.Group className="mb-3" controlId="formBasicuserid">
                    <Form.Label>NAME</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" value={name}
                                        onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>EMAIL</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email}
                                           onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicuserid">
                    <Form.Label>USERID</Form.Label>
                    <Form.Control type="userid" placeholder="Enter userid" value={userid}
                                            onChange={(e) => setUserid(e.target.value)} />
                </Form.Group>

                <Button variant="primary" onClick={handleUpdate} >
                    Update
                </Button>
                
                <Link to="/home">
                <Button variant="primary">Back</Button>
                 </Link>
            </Form>
        </div>
    </div>

    );
}

export default Update;