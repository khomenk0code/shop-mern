import React from 'react';
import styled from "styled-components";
import {ICategories} from "../data";


type CategoriesItemProps = {
    item: ICategories
}


const CategoriesItem:React.FC<CategoriesItemProps>  = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>Shop now</Button>
            </Info>
        </Container>

    );
};

const Container = styled.div`
flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`
const Image = styled.img`
width: 100%;
  height: 100%;
  object-fit: cover;
`
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`
const Title = styled.h2`
  color: #fff;
  margin-bottom: 1rem;
`
const Button = styled.button`
  border: none;
  padding: .5rem;
  background-color: #fff;
  color: #808080;
  cursor: pointer;
  font-weight: 600;
`

export default CategoriesItem;
