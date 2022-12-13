import styled from "styled-components";

// CSS
const HeaderWrapper = styled.header`
  align-content: center;
  display: flex;
  height: 2rem;
  justify-content: space-between;
  line-height: 2rem;
  padding: 0.5rem 1rem;
  background-color: beige;
  border-bottom: 1px solid;
`;

const HeaderTitle = styled.div`
  font-size: 1.5rem;
`;

export const Header = () => {
  return (
  <HeaderWrapper>
    <HeaderTitle>Sticky Note</HeaderTitle>
  </HeaderWrapper>
  );
};
