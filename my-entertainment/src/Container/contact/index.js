import  React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFacebook, BsLinkedin, BsTwitter, BsStackOverflow, BsGoogle, BsGithub, BsYoutube } from "react-icons/bs";
import './style.css';
const  ContactContainer = ()=>{
    const myData = [

        {name:'Linkedin', link:'https://www.linkedin.com/public-profile/settings', text:'Follow to my linkedin.'},

        {name:'GitHub', link:'https://github.com/PUPUN-SAHOO', text:'Follow to my github account.'},
        {name:'YouTube', link:'https://youtube.com/@pupun2419?si=k73P_cKQtk-fytEO', text:'Follow to my youtube channel.'},
        {name:'Email', link:'MAIL TO :pupunsahoo961@gmail.com',  text:'Write A Mail'}
    ]
    return (
        <div className='contactWrap'>
        <Container>
            <Row>
                <Col>
                    <p>CONNECT WITH US</p>
                    <h1>Get in Touch</h1>
                </Col>
            </Row>
            <Row>
                <Col className='conectIcon'>
                    <ul className='socialIconsList'>
                       
                        <li>
                            <a rel="noreferrer" href="https://www.linkedin.com/public-profile/settings" target="_blank">
                                <BsLinkedin />
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" href="" target="_blank">
                                <BsTwitter />
                            </a>
                        </li>
                    
                      
                        <li>
                            <a rel="noreferrer" href="https://youtube.com/@pupun2419?si=k73P_cKQtk-fytEO" target="_blank">
                                <BsGithub />
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" href="https://youtube.com/@pupun2419?si=k73P_cKQtk-fytEO" target="_blank">
                                <BsYoutube />
                            </a>
                        </li> 
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup className='contactList'>
                        {
                            myData && myData.length > 0 ? myData.map((item)=>{
                                return (
                                    <ListGroup.Item key={item.name}>
                                        <span>{item.text}</span>
                                        <a href={item.link} rel="noreferrer"  target="_blank">
                                            {item.link}
                                        </a>
                                    </ListGroup.Item>
                                )
                            }) : ''
                        }
                        
                    </ListGroup>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default ContactContainer;                                          