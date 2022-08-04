import React from "react";
import styled from "styled-components";

const Layout = ({children}) => {
  return (
    <StLayout>
      {children}
    </StLayout>
  )
}

const StLayout = styled.div`
  width: 1200px;
  height: 100vh;
  border: 1px solid gray;
  background-color: ivory;
  margin: 0 auto;
`

export default Layout;