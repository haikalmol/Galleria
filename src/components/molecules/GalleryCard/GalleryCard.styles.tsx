import styled from 'styled-components/macro'
import { motion } from 'framer-motion'

export const Figure = styled.figure`
  position: relative;
  opacity: 1;
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`

export const Caption = styled(motion.figcaption)`
  color: var(--color-white);
  position: absolute;
  bottom: 0;
  padding: 2rem;
  text-align: left;
  background: linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.85));
  width: 100%;

  h2 {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: normal;
    margin-bottom: 0.4375rem;
    white-space: pre-line;
  }

  p {
    font-size: 0.8125rem;
    color: rgba(255, 255, 255, 0.75);
  }
`
