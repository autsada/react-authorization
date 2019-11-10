import React from 'react'
import styled from 'styled-components'

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
  return (
    <Head>
      <ul className='navigation'>
        <li>free courses</li>
        <li>blog</li>
        <li>resources</li>
        <li>premium courses</li>
        <li>admin</li>
        <li>login</li>
      </ul>
    </Head>
  )
}

export default Nav
