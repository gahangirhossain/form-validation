import './App.css';
import { useState } from 'react';
function App(){
  const [userInfo,setUserInfo]=useState({
    userName:'',
    password:'',
  })

  const[errorInfo,setErrorInfo]=useState({
    userName:'',
    password:'',
  })


  const handleSubmit=(evt)=>{
    evt.preventDefault()
    const{userName,password}=userInfo
    // validation here

      if(userName===''){
        setErrorInfo({
          ...errorInfo,
          userName:'please input your valid name'
        })
        return
      }

      if(password===''){
        setErrorInfo({
          ...errorInfo,
          password:'please provide your valid password'
        })
        return
      }
      // reset all inputs
      setUserInfo({
        userName:'',
        password:''
      })
  }

  const handleChange=(evt)=>{
    setUserInfo({
      ...userInfo,
      [evt.target.name]:evt.target.value
    })
      setErrorInfo('')
      console.log(userInfo)
  }

  const{userName,password}=userInfo
  return(
   <>
   <div className='center'>
    <h1>Login</h1>
    <form method='post' onSubmit={handleSubmit}>
      <div className='txt_field'>
        {errorInfo.userName && errorInfo.userName}
        <input type='text'name='userName' onChange={handleChange} value={userName}  />
        <label>UserName</label>
      </div>
      <div className='txt_field'>
        {errorInfo.password && errorInfo.password}
        <input type='password'name='password' onChange={handleChange} value={password} />
        <label>Password</label>
      </div>
      <div className='password'>Forget Password ?</div>
      <input type='submit' value='login'></input>
      <div className='signup_link'>
        Not a member ? <a href='#'>Signup</a>
      </div>
    </form>
   </div>
   </>
  )
}
export default App