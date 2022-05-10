import React from "react";
import styled from "styled-components";
const FlexStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin-bottom: 5px;
  }
`;
const Flex = (props) => {
  return <FlexStyled {...props}>{props.children}</FlexStyled>;
};

export default Flex;
