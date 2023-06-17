import React, {useState} from 'react'

export const Login = (props) => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handleSubmit=(e)=>{e.preventDefault();
        console.log(email);
    }
  return (
    <div className="auth-form-container">
      <h2 style={{color:'blue'}}>Login</h2>
      <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor='email'>Email:--</label>
        <input value={email} required placeholder='your@gmail.com'onChange={(e)=>setEmail(e.target.value)} type='email'/>
        <label htmlFor='password'>Password:--</label>
        <input value={password} required placeholder='Password' onChange={(e)=>setPassword(e.target.value)} type='password'/>
        
        <button type='submit'>Login</button>
      </form>
      <button className='link-btn' onClick={()=>props.onFormSwitch('register')}>Don't have an account? Sign Up</button>
    </div>
  )
  }


