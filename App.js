import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {
  const [users,setUsers] = useState();
  const getUsers = async() => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    setUsers(data.data);
  };
  return (
    <>
      <header className="Nav">
        <h1><l>LET'S GROW MORE</l></h1>
        <div className="btn" onClick={getUsers}>Get Users</div>
      </header>
      <div className="row">
        {users?.map((current,index) => {
          return(
            <div className="card column" key={index}>
              <img src={current.avatar} className="card-img-top" alt=" ... "/>
              <div className="card-body">
                <h3 className="card-title">
                  {current.first_name} {current.last_name}
                </h3>
                <h4 className="card-text">{current.email}</h4>
              </div>

            </div>
          );
        })}  
        
        
      </div>  
      </>
        
      
  );
}

export default App;
