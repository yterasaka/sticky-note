import styled from "styled-components";
import SlideMenu from "./SlideMenu";

// CSS
const HeaderWrapper = styled.header`
  align-content: center;
  display: flex;
  height: 3rem;
  width: 100%;
  position: fixed;
  justify-content: start;
  line-height: 2rem;
  padding: 0.5rem 1rem;
  background-color: beige;
  border-bottom: 1px solid;
  z-index: 100;
`;

const HeaderTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  margin-left: 75px;
  padding-top: 7px; 
`;

export const Header = () => {
  return (
  <HeaderWrapper>
    <SlideMenu />
    <HeaderTitle>StickyNote</HeaderTitle>
  </HeaderWrapper>
  );
};
