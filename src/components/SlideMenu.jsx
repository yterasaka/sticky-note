import React from "react";
import { slide as Menu } from "react-burger-menu";
import { BsStickies, BsStar, BsTrash } from "react-icons/bs";
import styled from "styled-components";

const Title = styled.p`
  color: gray;
  padding: 0 0 1rem 0.5rem;
`;
const Filter = styled.button`
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

export const SlideMenu = (props) => {
  const all = () => {
    props.setFilter("all");
  };
  const star = () => {
    props.setFilter("star");
  };
  const trash = () => {
    props.setFilter("trash");
  };

  return (
    <Menu styles={styles}>
      <Title>StickyNote</Title>
      <Filter onClick={all}>
        <BsStickies /> All Notes
      </Filter>
      <Filter onClick={star}>
        <BsStar /> Star
      </Filter>
      <Filter onClick={trash}>
        <BsTrash /> Trash
      </Filter>
    </Menu>
  );
};

export default SlideMenu;
