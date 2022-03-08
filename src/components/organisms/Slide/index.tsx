import queries from 'styles/breakpoints'
import { useDispatch, useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion'

import { ReactComponent as IconView } from 'assets/shared/icon-view-image.svg'
import {
  currentSlideIndex,
  currentSlide,
  slidesDirection,
} from 'store/slidesSlice'
import { openLightBox } from 'store/lightboxSlice'
import {
  Article,
  ArtistImageDesktop,
  ArtistImage,
  Button,
  Body,
  Caption,
  Description,
  Figure,
  Header,
  Link,
} from './Slide.styles'
import { slideAnimation } from 'utils/animations'

const Slide = (): JSX.Element => {
  const currentIndex = useSelector(currentSlideIndex)
  const direction = useSelector(slidesDirection)
  const current = useSelector(currentSlide)
  const dispatch = useDispatch()

  return (
    <AnimatePresence initial={false} custom={direction}>
      <Article
        key={currentIndex}
        custom={direction}
        variants={slideAnimation}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
      >
        <Header>
          <Figure
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <picture>
              <source
                media={queries.tabletUp}
                srcSet={current.images.hero.large}
              />
              <img src={current.images.hero.small} alt="" />
            </picture>
            <Caption>
              <h1>{current.name}</h1>
              <p>{current.artist.name}</p>
              <ArtistImage>
                <img src={current.artist.image} alt="" />
              </ArtistImage>
            </Caption>
            <ArtistImageDesktop>
              <img src={current.artist.image} alt="" />
            </ArtistImageDesktop>
            <Button onClick={() => dispatch(openLightBox())}>
              <IconView />
              <span>View image</span>
            </Button>
          </Figure>
        </Header>
        <Body year={current.year}>
          <Description>{current.description}</Description>
          <Link href={current.source} target="_blank" rel="noopener noreferrer">
            Go to source
          </Link>
        </Body>
      </Article>
    </AnimatePresence>
  )
}

export default Slide
