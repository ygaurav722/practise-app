import React from "react";
import Users from "./Users";

function HomePage(){
    return(
    <>
        <div>
            <h1>
                Welcome to Practise App Please Explore 
            </h1>
            <p>
                Created a sign in and sign up page. Extracted userid , email id and password. 
                save them in a json file. read the json file to show the present users data.
            </p>
            <div>
                <Users/>
            </div>
        </div>
    </>
    );
            
    
    
    
};

export default HomePage;
