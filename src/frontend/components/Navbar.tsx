import React, { FC, useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Button,
  NavbarText,
} from 'reactstrap';
import { UserContext } from '../services/providers';
import { captureError } from '../utils';
import { useNavigate } from 'react-router-dom';

export const AppNavbar: FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const { user, setUser } = useContext(UserContext);

  const handleLogout = useCallback(() => {
    api
      .logout()
      .then(async () => {
        setUser(undefined);
        await navigate('/');
      })
      .catch(captureError);
  }, [setUser, navigate]);

  return (
    <Navbar dark expand="md">
      <NavbarBrand tag={Link} to="/">
        Read For Me
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/">
              Home
            </NavLink>
          </NavItem>
          {/*{user && (*/}
          {/*  <NavItem>*/}
          {/*    <NavLink tag={Link} to="/create">*/}
          {/*      Create Path*/}
          {/*    </NavLink>*/}
          {/*  </NavItem>*/}
          {/*)}*/}
        </Nav>
        <Nav navbar>
          {!user ? (
            <>
              <NavItem>
                <NavLink tag={Link} to="/signup">
                  Sign Up
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/login">
                  Login
                </NavLink>
              </NavItem>
            </>
          ) : (
            <>
              <NavbarText className={'me-3'}>Welcome, {user.name}</NavbarText>
              <NavItem>
                <Button
                  className={'no-border'}
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Logout
                </Button>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};
