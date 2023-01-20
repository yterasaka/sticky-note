// import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { BsStickies, BsStar, BsTrash, BsPencilSquare } from "react-icons/bs";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import logo from "../image/logo_transparent.png";
import SlideMenu from "./SlideMenu";
import { Desktop, Mobile } from "../utils/constants";

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
  font-size: 1.5rem;
  margin-left: 20px;
  margin-top: 10px;
  background: none;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  &:active {
    opacity: 1;
  }
`;

const FilterButtonAll = styled(FilterButton)`
  color: ${({ filter }) =>
    filter === "all" ? "#F08080" : "#373a47"};
`;
const FilterButtonStar = styled(FilterButton)`
  color: ${({ filter }) =>
      filter === "star" ? "#F08080" : "#373a47"};
`;
const FilterButtonTrash = styled(FilterButton)`
  color: ${({ filter }) =>
    filter === "trash" ? "#F08080" : "#373a47"};
`;

const NewNoteButton = styled.button`
  margin-left: 50px;
  margin-top: 10px;
  background: none;
  border: none;
  color: #373a47;
  font-size: 1.5rem;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`

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
    //   const Desktop = ({ children }) => {
    //     const isDesktop = useMediaQuery({ minWidth: 1025 });
    //     return isDesktop ? children : null;
    //   };

    // const Mobile = ({ children }) => {
    //   const isMobile = useMediaQuery({ maxWidth: 1024 });
    //   return isMobile ? children : null;
    // };

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
            <BsStickies /> 
            {/* All Notes */}
          </FilterButtonAll>
          <FilterButtonStar filter={filter} onClick={() => handleFilter("star")}>
            <BsStar /> 
            {/* Star */}
          </FilterButtonStar>
          <FilterButtonTrash filter={filter} onClick={() => handleFilter("trash")}>
            <BsTrash /> 
            {/* Trash */}
          </FilterButtonTrash>
          <NewNoteButton>
            <BsPencilSquare />
          </NewNoteButton>
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
