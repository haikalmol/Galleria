import styled from 'styled-components/macro'
import { motion } from 'framer-motion'

import queries from 'styles/breakpoints'

export const Article = styled(motion.article)`
  position: absolute;
  left: 0;
  padding: 1.5rem;
  margin: 0 auto;
  max-width: var(--max-width);

  @media ${queries.desktopUp} {
    margin-right: 1.5rem;
    display: flex;
    align-items: flex-start;
  }
`

export const Header = styled.div`
  @media ${queries.tabletUp} {
    display: flex;
    margin-bottom: 9rem;
  }

  @media ${queries.laptopUp} {
    flex-basis: 60%;
  }
`

export const Figure = styled(motion.figure)`
  position: relative;
  margin-bottom: 11rem;

  @media ${queries.tabletUp} {
    width: 29.6875rem;
    margin-bottom: 0;
    margin-left: auto;
    margin-right: auto;
    transform: translateX(-4rem);
  }

  @media ${queries.desktopUp} {
    margin: 0;
    transform: translateX(0);
  }
`

export const Caption = styled.figcaption`
  position: absolute;
  background-color: var(--color-white);
  padding: 1.5rem;
  bottom: -3.5rem;
  width: 85%;

  @media ${queries.tabletUp} {
    padding: 0 4rem 4.125rem 4rem;
    top: 0;
    left: 15rem;
    bottom: unset;
    width: 100%;
  }

  @media ${queries.desktopUp} {
    left: 26rem;
  }

  h1 {
    font-size: 1.5rem;
    color: var(--color-black);
    font-weight: bold;
    line-height: 1;
    margin-bottom: 0.5rem;

    @media ${queries.tabletUp} {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
    }
  }

  p {
    font-size: 0.9375rem;
    color: var(--color-grey-1);
  }
`

export const ArtistImage = styled.div`
  position: absolute;
  bottom: -4rem;

  @media ${queries.tabletUp} {
    margin-bottom: 0;
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    right: 5rem;
  }

  @media ${queries.desktopUp} {
    display: none;
  }

  img {
    width: 4rem;
    height: 4rem;

    @media ${queries.tabletUp} {
      width: 8rem;
      height: 8rem;
    }
  }
`

export const ArtistImageDesktop = styled.div`
  display: none;
  position: absolute;
  right: -10rem;
  transform: translateY(-50%);
  img {
    width: 8rem;
    height: 8rem;
  }

  @media ${queries.desktopUp} {
    display: block;
  }
`

export const Body = styled.div<DescriptionProps>`
  padding-bottom: 4.1875rem;
  position: relative;
  flex-shrink: 0;
  @media ${queries.tabletUp} {
    padding-left: 7.1875rem;
    padding-right: 7.1875rem;
  }

  @media ${queries.desktopUp} {
    padding-right: 7rem;
    padding-left: 5.188rem;
    padding-top: 7.1875rem;
    flex-basis: 40%;
  }

  &::before {
    position: absolute;
    content: ${({ year }) => `"${year}"`};
    font-weight: bold;
    color: var(--color-grey-10);
    font-size: 6.25rem;
    top: -4rem;
    right: 0;
    z-index: 1;
    line-height: 1;

    @media ${queries.tabletUp} {
      font-size: 12.5rem;
      right: unset;
      left: 0;
      top: -6rem;
    }

    @media ${queries.desktopUp} {
      left: 6rem;
      top: 1rem;
    }

    @media ${queries.desktopUp} {
      font-size: clamp(9rem, 10vw, 12.5rem);
    }
  }
`

export const Button = styled(motion.button)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: rgba(0, 0, 0, 0.75);
  border: none;
  padding: 0.875rem 1rem;
  text-transform: uppercase;
  color: var(--color-white);
  font-size: 0.625rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s linear;

  & svg g {
    transition: fill 0.2s linear;
  }

  @media ${queries.tabletUp} {
    top: unset;
    bottom: 1rem;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.85);
    color: var(--color-black);
  }

  &:hover svg g {
    fill: var(--color-black);
  }

  span {
    margin-left: 0.875rem;
    letter-spacing: 0.13375rem;
  }
`

type DescriptionProps = {
  year: number
}

export const Description = styled.p`
  font-weight: bold;
  font-size: 0.875rem;
  color: var(--color-grey-1);
  line-height: 2;
  margin-bottom: 2.25rem;
  z-index: 2;
  position: relative;
`

export const Link = styled.a`
  font-size: 0.5625rem;
  font-weight: bold;
  color: var(--color-grey-1);
  text-transform: uppercase;
  letter-spacing: 0.1206rem;
`
