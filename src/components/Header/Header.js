import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header(){
    return (
      <Link to="/">
        <Container>
          <Logo>CINEFLEX</Logo>
        </Container>
      </Link>
    )
  }

export default Header;

const Container = styled.header`
    background-color: #c3cfd9;
    width: 100%;
    height: 10vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.h1`
    font-size: 2.5em;
    font-weight: 500;
    color: darkorange;
    text-align: center;
    
`;

