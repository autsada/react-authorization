import React from 'react'
import styled from 'styled-components'

import Nav from '../components/Nav'
import Courses from '../components/Courses'
import Blog from '../components/Blog'
import Resources from '../components/Resources'
import PremiumCourses from '../components/PremiumCourses'
import Admin from '../components/Admin'
import Login from '../components/Login'
import NotFound from '../components/NotFound'

const Div = styled.div`
  margin: 0;
  padding: 0;
`

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`

function Router() {
  return (
    <Div>
      <Nav />
      <Page></Page>
    </Div>
  )
}

export default Router
