import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { BsStickies, BsStar, BsTrash } from "react-icons/bs";
import styled from "styled-components";
import logo from "../image/logo_transparent.png";

// CSS
const FilterButton = styled.button`
  color: #373a47;
  border: none;
  font-size: 1.1rem;
  padding: 3px 10px;
  border-radius: 10px;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
  &:active {
    opacity: 1;
  }
`;

const FilterButtonAll = styled(FilterButton)`
  background-color: ${({ filter }) => (filter === "all" ? "#87CEFA" : "white")};
`;
const FilterButtonStar = styled(FilterButton)`
  background-color: ${({ filter }) =>
    filter === "star" ? "#87CEFA" : "white"};
`;
const FilterButtonTrash = styled(FilterButton)`
  background-color: ${({ filter }) =>
    filter === "trash" ? "#FFB6C1" : "white"};
`;

const Logo = styled.img`
  width: 100px;
  padding-bottom: 20px;
`

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "30px",
    height: "25px",
    left: "30px",
    top: "22px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    width: "200px",
    top: "0",
    left: "0",
  },
  bmMenu: {
    background: "#fff",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    height: "95%",
  },
  bmItem: {
    marginBottom: "1rem",
    marginLeft: "1rem",
  },
  bmOverlay: {
    top: "0",
    background: "rgba(0, 0, 0, 0.2)",
  },
};

export const SlideMenu = ({ filter, setFilter }) => {
  const [isOpen, setIsOpen] = useState();

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleFilter = (target) => {
    setFilter(target);
    setIsOpen(false);
  };

  return (
    <Menu
      styles={styles}
      isOpen={isOpen}
      onOpen={handleIsOpen}
      onClose={handleIsOpen}
    >
      <Logo src={logo} alt="image" />
      <FilterButtonAll filter={filter} onClick={() => handleFilter("all")}>
        <BsStickies /> All Notes
      </FilterButtonAll>
      <FilterButtonStar filter={filter} onClick={() => handleFilter("star")}>
        <BsStar /> Star
      </FilterButtonStar>
      <FilterButtonTrash filter={filter} onClick={() => handleFilter("trash")}>
        <BsTrash /> Trash
      </FilterButtonTrash>
    </Menu>
  );
};

export default SlideMenu;
