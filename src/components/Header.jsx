import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { BsStickies, BsStar, BsTrash } from "react-icons/bs";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import logo from "../image/logo_transparent.png";
import SlideMenu from "./SlideMenu";

// CSS
const HeaderWrapper = styled.header`
  align-content: center;
  display: flex;
  height: 4rem;
  width: 100%;
  position: fixed;
  justify-content: space-between;
  background-color: #fef4a8;
  border-bottom: 1px solid #1d1f20;
  z-index: 1;
  top: 0;
`;

const Logo = styled.img`
  padding: 0.2rem;
  position: absolute;
  height: 4rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const FilterMenu = styled.div`
  margin: auto 10px;
`;

const FilterButton = styled.button`
  color: #373a47;
  border: none;
  font-size: 1.1rem;
  padding: 5px 10px;
  margin: auto 5px;
  border-radius: 5px;
  border: solid 1px #373a47;
  &:hover {
    cursor: pointer;
  }
  &:active {
    opacity: 1;
  }
`;

const FilterButtonAll = styled(FilterButton)`
  background-color: ${({ filter }) =>
    filter === "all" ? "#87CEFA" : "#f5f5f5"};
`;
const FilterButtonStar = styled(FilterButton)`
  background-color: ${({ filter }) =>
    filter === "star" ? "#87CEFA" : "#f5f5f5"};
`;
const FilterButtonTrash = styled(FilterButton)`
  background-color: ${({ filter }) =>
    filter === "trash" ? "#FFB6C1" : "#f5f5f5"};
`;

const LinkButtonMenu = styled.div`
  margin: auto 35px;
  padding-top: 5px;
`;

const LinkButton = styled.a`
  font-size: 1.3rem;
  color: #373a47;
  margin-left: 20px;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const Header = ({ filter, setFilter }) => {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1025 });
    return isDesktop ? children : null;
  };

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 1024 });
    return isMobile ? children : null;
  };

  const handleFilter = (t) => {
    setFilter(t);
  }

  return (
    <HeaderWrapper>
      {/* Mobile */}
      <Mobile>
        <SlideMenu filter={filter} setFilter={setFilter} />
        <LinkButtonMenu>
          <LinkButton href="https://github.com/yterasaka">
            <FiGithub />
          </LinkButton>
          <LinkButton href="https://www.linkedin.com/in/yuki-terasaka-a5399b129/">
            <FiLinkedin />
          </LinkButton>
        </LinkButtonMenu>
      </Mobile>
      {/* Desktop */}
      <Desktop>
        <FilterMenu>
          <FilterButtonAll filter={filter} onClick={() => handleFilter("all")}>
            <BsStickies /> All Notes
          </FilterButtonAll>
          <FilterButtonStar filter={filter} onClick={() => handleFilter("star")}>
            <BsStar /> Star
          </FilterButtonStar>
          <FilterButtonTrash filter={filter} onClick={() => handleFilter("trash")}>
            <BsTrash /> Trash
          </FilterButtonTrash>
        </FilterMenu>
        <Logo src={logo} alt="image" />
        <LinkButtonMenu>
          <LinkButton href="https://github.com/yterasaka">
            <FiGithub />
          </LinkButton>
          <LinkButton href="https://www.linkedin.com/in/yuki-terasaka-a5399b129/">
            <FiLinkedin />
          </LinkButton>
        </LinkButtonMenu>
      </Desktop>
    </HeaderWrapper>
  );
};
