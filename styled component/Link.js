import React from 'react';
import styled from 'styled-components'
const StyledLink = styled.a.attrs(() => ({
    target: "_blank"
}))`
 display:inline-block;
 font-size:1.3rem;
 text-decoration:none;
 color:${({theme}) =>(theme.colors.secondary)}    

`
const Link = (props) => {
    return <StyledLink {...props}>{ props.children}</StyledLink>
}

export default Link;
