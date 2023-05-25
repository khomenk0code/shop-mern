import React from 'react';
import styled from "styled-components";


const Announcement: React.FC = () =>
    (
        <Container>
            Super Deal! Free Shipping to Ukraine on Orders Over 50$
        </Container>
    );

const Container = styled.div`
  height: 2rem;
  background-color: #008080;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`

export default Announcement;
