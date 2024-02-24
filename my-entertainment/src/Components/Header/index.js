import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import{Link} from 'react-router-dom';
const HomeComponent =()=>{
  const navData=[
    {name:'Home',link:'/'},
    {name:'movies',link:'/movies'},
    {name:'tvseries',link:'/series'},
    {name:'search',link:'/search'},
    {name:'contact us',link:'/contact'},
    {name:'about',link:'/about'}
  
  ]
  return(
    <header className='header'>
    <Navbar bg="dark" expand="lg">
    <Container>
    <Navbar.Brand>
    my Entertainment

    </Navbar.Brand>
    <Navbar.Toggle area-controls=" navbarScroll"/>
    <Navbar.Collapse id=" navbarScroll"/>
    <Nav className='me-aut-my-2 my-lg-0'
    style={{maxHeight:'100px'}} navbarScroll>
    {
      navData.map((item)=>{
        return(
          <nav key={item.name}>
          <Link to={item.link}>
          {item.name}
          </Link>
           
          </nav>
        )
      })
    }
    </Nav>

    </Container>

    </Navbar>
      
    </header>
  )
}
export default HomeComponent;