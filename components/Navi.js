"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { authh, LogOut } from "@/app/api/fbase";
function Navi(props) {
  const [loginState,setLoginState] = useState({uid:"",gmail:"",isLogin:false})
  authh.onAuthStateChanged(function(user) {
    if (user) {
      setLoginState({
        uid:user.uid,
        email:user.email,
        isLogin:true
      });
      
      } else {
      setLoginState({
        uid:"",
        gmail:"",
        isLogin:false
      })
      }
    });
  return (
    <div className='Navi'>
    <Navbar bg="light" expand="sm" variant='light'>
      <Container>
        <Navbar.Brand href="#home">SEMICOLON {props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
          <Nav className="me-auto">
            <NavDropdown title="이동..." id="basic-nav-dropdown">
              <NavDropdown.Item href='/'>Home</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/chat'>Chatting</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/cards'>Cards</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/MMB'>I hate exam</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="버그 제보" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">A</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                B
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">C</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                동아리장 이메일
              </NavDropdown.Item>
            </NavDropdown>
          
          </Nav>

          {loginState.isLogin == false ? 
          <Nav.Link href="/front">Login</Nav.Link>
          :
          
            <NavDropdown title={loginState.uid}>
              <NavDropdown.Item href="/">정보</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item onClick={LogOut}>log out</NavDropdown.Item>
            </NavDropdown>
          
          
          }

          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Navi;