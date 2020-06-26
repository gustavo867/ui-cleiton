import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Contact, CompanyName, About, PageHome, TextHome } from './styles';

import logo from '../assets/heavy-box.svg'

function Home() {
  return (
    <Container>

      <Contact>
        <CompanyName>
          <div></div>
          <h2>Cleiton Company</h2>
        </CompanyName>
        <About>
          <Link to="/">
           <h3>Home</h3>
          </Link>  

          <Link to="/About">
            <h3>About</h3>
          </Link>

          <Link>
            <h3>Work</h3>
          </Link>
          
          <Link>
            <h3>Info</h3>
          </Link>
          
          <Link>
            <h3>Contact us</h3>
          </Link>
        </About>
      </Contact>

      <PageHome>
        <TextHome>
          <h1>Team Work</h1>
          <h1>Process</h1>
          <p>Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. 
            Possimus molestiae fuga nisi, 
            at amet quia ullam voluptatem 
            sequi inventore doloremque officia! 
            Accusantium animi quisquam corrupti 
            saepe, porro deleniti facilis sed?
          </p>

          <button type="submit">Learn More</button>
        </TextHome>
        <img src={logo} alt="box"/>
      </PageHome>
      
    </Container>
  )
}

export default Home
