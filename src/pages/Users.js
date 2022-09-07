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
            <div>
                {JSON.stringify(data,null,2)}
            </div>
            <div>
                <ul>
                    {data.map((user,key)=>
                    (
                        <li key={user.userid}> {user.emailid}</li>
                    ))}
                </ul>
            </div>
            </>
        )
    }
}

export default Users;