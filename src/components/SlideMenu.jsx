import React from "react";
import { slide as Menu } from "react-burger-menu";
import styled from "styled-components";


const Link = styled.a`
  color: #373a47;
  text-decoration: none;
  &:hover {
    opacity: 0.7;
  }
`;

const styles = {
  bmBurgerButton: {
    position: 'fixed',
      width: '30px',
      height: '25px',
      left: '30px',
      top: '22px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    width: '250px',
    top: '0',
    left: '0'
  },
  bmMenu: {
    background: '#fff',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
  },
  bmItem: {
   
  },
  bmOverlay: {
    top: '0',
    background: 'rgba(0, 0, 0, 0.3)'
  }
}


const SlideMenu = () => {
  return (
    <Menu styles={ styles }>
      <Link id="all" href="/">
        All Notes
      </Link>
      <Link id="star" href="/">
        Star
      </Link>
      <Link id="trash" href="/">
        Trash
      </Link>
    </Menu>
  );
};

export default SlideMenu;