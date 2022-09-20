import React, { useEffect, useState } from "react";


function Users(){
    const [data,setdata]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3004/userdata')
        .then(response=> response.json())
        .then(data=>setdata(data));
    },[]);
    if(data)
    {
        return(
            <>
            <table className="container">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Userid</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                        {data.map((user,id)=>(
                            <tr>
                                <td>{user.emailid}</td>
                                <td>{user.userid}</td>
                                <td>{user.password}</td>
                            </tr>
                            
                        ))}
              
                </tbody>
            </table>

            </>
        )
    }
}

export default Users;