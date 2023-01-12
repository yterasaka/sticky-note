import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { BsStickies, BsStar, BsTrash } from "react-icons/bs";
import styled from "styled-components";

const Title = styled.p`
  color: gray;
  padding: 0 0 1rem 0.5rem;
`;
const FilterButton = styled.button`
  color: #373a47;
  border: none;
  font-size: 1.1rem;
  background-color: white;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 1;
  }
`;

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
    width: "250px",
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
    background: "rgba(0, 0, 0, 0.0)",
  },
};

export const SlideMenu = ({ setFilter }) => {
  const [isOpen, setIsOpen] = useState();

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeSideBar = () => {
    setIsOpen(false);
  };

  const all = () => {
    setFilter("all");
  };
  const star = () => {
    setFilter("star");
  };
  const trash = () => {
    setFilter("trash");
  };

  return (
    <Menu
      styles={styles}
      isOpen={isOpen}
      onOpen={handleIsOpen}
      onClose={handleIsOpen}
    >
      <Title>StickyNote</Title>
      <FilterButton
        onClick={() => {
          all();
          closeSideBar();
        }}
      >
        <BsStickies /> All Notes
      </FilterButton>
      <FilterButton
        onClick={() => {
          star();
          closeSideBar();
        }}
      >
        <BsStar /> Star
      </FilterButton>
      <FilterButton
        onClick={() => {
          trash();
          closeSideBar();
        }}
      >
        <BsTrash /> Trash
      </FilterButton>
    </Menu>
  );
};

export default SlideMenu;
