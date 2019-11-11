import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { AuthContext } from '../App'

const Head = styled.header`
  width: 100%;
  height: 50px;
  background: teal;
  color: white;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  .navigation {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
      text-decoration: none;
      list-style: none;
      color: white;
    }
  }
`

const Nav = () => {
  const { auth, logout } = useContext(AuthContext)

  const history = useHistory()

  return (
    <Head>
      <ul className='navigation'>
        <Link to='/'>
          <li>free courses</li>
        </Link>
        <Link to='/blog'>
          <li>blog</li>
        </Link>
        <Link to='/resources'>
          <li>resources</li>
        </Link>

        {auth && (
          <Link to='/premium-courses'>
            <li>premium courses</li>
          </Link>
        )}

        {auth && auth === 'admin' && (
          <Link to='/admin'>
            <li>admin</li>
          </Link>
        )}

        {auth ? (
          <p
            style={{ cursor: 'pointer' }}
            onClick={() => {
              logout()
              history.push('/')
            }}
          >
            logout
          </p>
        ) : (
          <Link to='/login'>
            <li>login</li>
          </Link>
        )}
      </ul>
    </Head>
  )
}

export default Nav
