import styled from 'styled-components/macro'
import { motion } from 'framer-motion'

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  display: grid;
  place-content: center;
  background: rgba(0, 0, 0, 0.85);
  left: 0;
  right: 0;
  z-index: 100;
  height: 100vh;
`

export const ImageWrapper = styled.div`
  position: relative;
  padding: 0 1.5rem;
  margin: 0 auto;
  max-width: var(--max-width);
  z-index: 200;
`

export const CloseButton = styled.button`
  position: absolute;
  right: 1.5rem;
  top: -2.5625rem;
  background: transparent;
  border: none;
  padding: 0;
  color: var(--color-white);
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: bold;
  letter-spacing: 0.1875rem;
  cursor: pointer;
  transition: color 0.2s linear;

  &:hover {
    color: rgba(255, 255, 255, 0.25);
  }
`
