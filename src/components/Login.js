import React from 'react'
import './Login.css'
import { useState } from 'react';
import axios from 'axios';



function Login () {
  
  const [email1, setEmail] = useState("") 
  const [discordId1, setdiscordId] = useState("") 
  const [logged, setLogged] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();
  alert("el formulario ha sido enviado")
    axios.post(`https://ms-discord-upy5mhs63a-rj.a.run.app/auth/login`,{'email': `${email1}`, 'discordId':`${discordId1}`} )
    .then((response) => {
      console.log(response);
      setLogged(true);
    });
    console.log(email1);
    console.log(discordId1);
  }

  return (
    <div>
    {
      logged ? <div data-testid="welcome">Hello are you logged</div> : 
      <form className='Container' onSubmit={handleSubmit}>
      <label htmlFor="e-maill"><b>Email</b></label>
      <input  role="inputEmail" type="text" placeholder="Enter e-mail" name="email" required value={email1} onChange={(e)=> setEmail(e.target.value)}></input>
      <label htmlFor="id-discord"><b>Id Discord</b></label>
      <input role="inputDiscord" type="text" placeholder="Enter id discord" name="id-discord" required value={discordId1} onChange={(e)=> setdiscordId(e.target.value)}></input>
      <button role="submit" type="submit">Login</button>
    </form>
    }</div>

    
  );
}

export default Login;