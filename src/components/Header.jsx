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
  top: 0;
`;

export const Header = () => {

  return (
    <HeaderWrapper>
      <SlideMenu />
    </HeaderWrapper>
  );
};
