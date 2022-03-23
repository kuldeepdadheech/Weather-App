import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginStyle.css';

const Login = () => {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history=useNavigate();
  const onChangeHandler = (fieldName, value)=>{
    if(fieldName === "name"){
      setName(value);
    }
    else if(fieldName==="email"){
      setEmail(value);
    }
   else if(fieldName === "password"){
        setPassword(value);
      }
  }
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    if(name.trim()==="" || email.trim() ==="" || password===""){
      alert("required all fields");
    }
    else{
      e.preventDefault()
      history('/Home');
      setName("");
      setEmail("");
      setPassword("");
  }
}
  return (
    <div className="App">
    <div className="header"><h1>Login</h1></div>
      <form onSubmit={(e)=>{onSubmitHandler(e)}}>
      <label for="name"><b>Name:    </b> </label>
        <input type="text" value={name} onChange={(e)=>{ onChangeHandler("name",e.target.value)}} /> <br/><br/>
        <label for="email"><b>Email:     </b></label>
         <input type="email"  value={email} onChange={(e)=>{ onChangeHandler("email",e.target.value)}} /> <br/><br/>
         <label for="password"><b>Password:     </b></label>
         <input type="password" value={password} onChange={(e)=>{ onChangeHandler("password",e.target.value)}} /><br/> <br/>
         <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Login