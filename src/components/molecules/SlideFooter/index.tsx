import { useDispatch, useSelector } from 'react-redux'

import ProgressBar from 'components/atoms/ProgressBar'
import { ReactComponent as NextButton } from 'assets/shared/icon-next-button.svg'
import { ReactComponent as PrevButton } from 'assets/shared/icon-back-button.svg'
import { paginate } from 'store/slidesSlice'
import {
  currentSlide,
  currentSlideIndex,
  numberOfSlides,
} from 'store/slidesSlice'
import {
  ArrowButton,
  Controls,
  Footer,
  SlideInfo,
  Wrapper,
} from './SlideFooter.styles.'

const SlideFooter = (): JSX.Element => {
  const current = useSelector(currentSlide)
  const currentIndex = useSelector(currentSlideIndex)
  const slidesLength = useSelector(numberOfSlides)
  const dispatch = useDispatch()

  const progressBarWidth = Math.round(((currentIndex + 1) / slidesLength) * 100)

  return (
    <Wrapper>
      <ProgressBar width={progressBarWidth} />
      <Footer>
        <SlideInfo aria-live="polite">
          <h3>{current.name}</h3>
          <p>{current.artist.name}</p>
        </SlideInfo>
        <Controls>
          <ArrowButton
            aria-label="Previous Slide"
            onClick={() => dispatch(paginate(-1))}
          >
            <PrevButton />
          </ArrowButton>
          <ArrowButton
            aria-label="Next Slide"
            onClick={() => dispatch(paginate(1))}
          >
            <NextButton />
          </ArrowButton>
        </Controls>
      </Footer>
    </Wrapper>
  )
}

export default SlideFooter
