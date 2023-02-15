import { useMediaQuery } from "react-responsive"
import { css } from 'styled-components'

// breakpoints
export const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1025 });
    return isDesktop ? children : null;
  };

export const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 1024 });
    return isMobile ? children : null;
};

// breakpoints styled-components
export const media = {
    desktop: (...args) => css`
    @media (min-width: 1025px) {
      ${ css(...args)}
    }
  `,
    tablet: (...args) => css`
    @media (max-width: 1024px) {
      ${ css(...args)}
    }
  `,
    phone: (...args) => css`
    @media (max-width: 568px) {
      ${ css(...args)}
    }
  `
}

