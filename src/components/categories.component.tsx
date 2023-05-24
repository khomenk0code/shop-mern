import React from 'react';
import styled from "styled-components";
import {categories, ICategories} from "../data";
import CategoriesItem from "./categories.item";

const Container = styled.div`
  display: flex;
  padding: 1.5rem;
  justify-content: space-between;
`


const Categories: React.FC = () => {
    return (
        <Container>
            {categories.map((item: ICategories) =>(
                <CategoriesItem item={item} key={item.id}/>
            ))}
        </Container>
    );
};

export default Categories;
