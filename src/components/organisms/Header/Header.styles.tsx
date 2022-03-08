import { motion } from 'framer-motion'
import styled from 'styled-components/macro'

import queries from 'styles/breakpoints'

export const StyledHeader = styled(motion.header)`
  margin: 0 auto;
  max-width: var(--max-width);
  position: relative;
  padding: 1.5rem;
  border-bottom: 1px solid var(--color-grey-9);

  @media ${queries.laptopUp} {
    border-bottom: none;
  }
`

export const SlideshowButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  color: var(--color-grey-1);
  text-transform: uppercase;
  font-size: 0.5625rem;
  font-weight: bold;
  letter-spacing: 0.120625rem;
  transition: color 0.2s ease;
  margin-left: 1rem;
  cursor: pointer;

  &:hover {
    color: var(--color-black);
  }

  @media ${queries.tabletUp} {
    font-size: 0.75rem;
    letter-spacing: 0.160625rem;
  }
`

export const Navigation = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media ${queries.laptopUp} {
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      width: 100%;
      bottom: -3rem;
      left: 0;
      margin-bottom: 1.5rem;
      background-color: var(--color-grey-9);
    }
  }
`
