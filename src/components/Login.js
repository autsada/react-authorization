import React from 'react'
import styled from 'styled-components'

const FormDiv = styled.div`
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  width: 60%;
  padding: 1rem 0;
  border-radius: 4px;

  form {
    width: 50%;
    .input {
      width: 100%;
      padding: 10px;
      border: 1px solid teal;
      border-radius: 4px;
      font-size: 1rem;
      height: 2rem;
      margin-top: 1.5rem;

      &:focus {
        outline: none;
      }
    }

    .bttn {
      width: 40%;
      height: 2.5rem;
      padding: 5px auto;
      margin-top: 2rem;
      font-size: 1.2rem;
      background: teal;
      border: none;
      color: white;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background: green;
      }
    }
  }

  .login {
    margin-top: 3rem;
    margin-left: 1rem;
    justify-content: center;
    align-items: center;
    background: white;
    width: 50%;
    padding: 1rem;
    border: 1px solid teal;
    border-radius: 4px;
  }
`

const Login = () => {
  return (
    <FormDiv>
      <form>
        <input
          className='input'
          type='String'
          name='username'
          placeholder='Username'
        />
        <input
          className='input'
          type='password'
          name='password'
          placeholder='Password'
        />
        <button className='bttn'>Submit</button>
      </form>

      <div className='login'>
        <p>
          name: <span style={{ fontWeight: 'bold' }}>user</span> password:{' '}
          <span style={{ fontWeight: 'bold' }}>user</span>
        </p>
        <p>
          name: <span style={{ fontWeight: 'bold' }}>admin</span> password:{' '}
          <span style={{ fontWeight: 'bold' }}>admin</span>
        </p>
      </div>
    </FormDiv>
  )
}

export default Login
