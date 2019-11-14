import React from "react";
import { Switch, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";

import Nav from "../components/Nav";
import Courses from "../components/Courses";
import Blog from "../components/Blog";
import Resources from "../components/Resources";
import PremiumCourses from "../components/PremiumCourses";
import Admin from "../components/Admin";
import Login from "../components/Login";
import NotFound from "../components/NotFound";
import PublicRoutes from "./PublicRoutes";
import PremiumRoute from "./PremiumRoute";
import AdminRoute from "./AdminRoute";

const Div = styled.div`
  margin: 0;
  padding: 0;
`;

const Page = styled(animated.div)`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

function Router() {
  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate3d(-100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    leave: { opacity: 0, transform: "translate3d(50%,0,0)" }
  });

  return (
    <Div>
      <Nav />

      {transitions.map(({ item, props, key }) => (
        <Page key={key} style={props}>
          <Switch location={item}>
            <PublicRoutes exact path="/">
              <Courses />
            </PublicRoutes>
            <PublicRoutes path="/blog">
              <Blog />
            </PublicRoutes>
            <PublicRoutes path="/resources">
              <Resources />
            </PublicRoutes>

            <PremiumRoute path="/premium-courses">
              <PremiumCourses />
            </PremiumRoute>

            <AdminRoute path="/admin">
              <Admin />
            </AdminRoute>

            <PublicRoutes path="/login">
              <Login />
            </PublicRoutes>

            <PublicRoutes>
              <NotFound />
            </PublicRoutes>
          </Switch>
        </Page>
      ))}
    </Div>
  );
}

export default Router;
