import React, { useEffect, useState } from "react";


function Users(){
    const [data,setdata]=useState(null);
    useEffect(()=>{
        fetch('http://localhost:3004/userdata')
        .then(response=> response.json())
        .then(data=>setdata(data));
    },[]);
    if(data)
    {
        return(
            <pre>{JSON.stringify(data,null,2)}</pre>
        )
    }
}

export default Users;