import React,{useState} from 'react'

export const Register = (props) => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[name,setName]=useState('')
    const handleSubmit=(e)=>{e.preventDefault();
        console.log(email);
    }
    return (
    <div className='auth-form-container'>
      <h2 style={{color:'blue'}}>Create Your Account</h2>
      <form  className='register-form' onSubmit={handleSubmit}>
        <label htmlFor='name'>Full Name:--</label>
        <input value={name} required name='name' id='name' placeholder='Full Name'onChange={(e)=>setName(e.target.value)} type='name'/>
        <label htmlFor='email'>Email:--</label>
        <input value={email}  required placeholder="your@gmail.com" onChange={(e)=>setEmail(e.target.value)} type='email'/>
        <label htmlFor='password'>Password:--</label>
        <input value={password} required placeholder='Password' onChange={(e)=>setPassword(e.target.value)} type='password'/>
        <button type='submit'>Submit</button>
      </form>
      <button className='link-btn' onClick={()=>props.onFormSwitch('login')}>Already have an  account? Login</button>
    </div>
  )
}

export default Register
