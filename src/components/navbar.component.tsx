import React from 'react';
import styled from "styled-components";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Badge} from "@mui/material";
import {ShoppingCartOutlined} from "@mui/icons-material";


  
const Navbar: React.FC = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                    <Left>
                        <Language>EN</Language>
                        <SearchContainer>
                            <Input/>
                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: 'gray'}} />
                        </SearchContainer>
                    </Left>
                    <Center>
                        <Logo>MERN.</Logo>
                    </Center>
                    <Right>
                        <MenuItem>Register</MenuItem>
                        <MenuItem>Sign In</MenuItem>
                        <MenuItem>
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlined/>
                            </Badge>
                        </MenuItem>
                    </Right>
                </Wrapper>
            </Container>
        </div>
    );
};

const Container = styled.div`
  height: 60px;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Left = styled.div`    
  flex: 1; 
  display: flex;
  align-items: center;
`

const Language = styled.span`
font-size: 14px;
  cursor: pointer;
`
const SearchContainer = styled.div`
  border: 0.5px solid #d3d3d3;
  display: flex;
  align-items: center;
  margin-left: 2rem;
  padding: 0.5rem;
  border-radius: 5px;
`

const Input = styled.input`
    border: none;
 
`


const Center = styled.div`  
flex: 1;    
`

const Logo = styled.h1`  
font-weight: bold; 
  text-align: center;
`

const Right = styled.div`   
flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const MenuItem = styled.div`
cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
  margin-left: 1rem;
`

export default Navbar;

