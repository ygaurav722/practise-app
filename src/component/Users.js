import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Users(){
    const [data,setData]=useState([]);

    const getData=()=>{
        axios.get("https://632bf3ef5568d3cad87886a3.mockapi.io/practise-app")
      .then((res) => {
        setData(res.data);
      });
    }

    useEffect(()=>{
        getData();
    },[]);

    const setToLocalStorage = (id,userid, name, email) => {
        localStorage.setItem("id", id);
        localStorage.setItem("userid",userid);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
      };

      const handleDelete=(id)=> {
        axios
          .delete(`https://632bf3ef5568d3cad87886a3.mockapi.io/practise-app/${id}`)
          .then(() => {
            getData();
          });
      }

    if(data)
    {
        return(
            <>
            <table className="container">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Userid</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                        {data.map((user,id)=>(
                            <tr>
                                <td>{user.id}</td>
                                <th>{user.name}</th>
                                <td>{user.userid}</td>
                                <td>{user.email}</td>
                                <td>
                    <Link to="/update">
                      <button
                        className="btn-success"
                        onClick={() =>
                          setToLocalStorage(
                            data.id,
                            data.name,
                            data.userid,
                            data.email
                          )
                        }
                      >
                        Edit{" "}
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(data.id)}
                    >
                      Delete
                    </button>
                  </td>
                            </tr>
                            
                        ))}
              
                </tbody>
            </table>

            </>
        )
    }
}

export default Users;