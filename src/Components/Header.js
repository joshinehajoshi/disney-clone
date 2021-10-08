import React from 'react';
import styled from 'styled-components';

function Header(props) {
    return (
        <div>
            <Nav>
              <h1>Header</h1>
              <h1>Header</h1>
            </Nav>
        </div>
    )
}

const Nav = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    background-color: black;
    display: flex;
    justify-content: space-between;
`
export default Header
