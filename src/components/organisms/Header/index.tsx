import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { isPlaying, toggleIsPlaying } from 'store/slidesSlice'
import { Navigation, StyledHeader, SlideshowButton } from './Header.styles'
import Logo from 'components/atoms/Logo'
import { pageAnimation } from 'utils/animations'

const Header = (): JSX.Element => {
  const dispatch = useDispatch()
  const history = useHistory()
  const isSlideshowPlaying = useSelector(isPlaying)

  const handleClick = () => {
    history.push('/slideshow')
    dispatch(toggleIsPlaying())
  }

  return (
    <StyledHeader
      exit="exit"
      variants={pageAnimation}
      initial="hide"
      animate="show"
    >
      <Navigation>
        <Logo />
        <SlideshowButton onClick={handleClick}>
          {isSlideshowPlaying ? 'Stop Slideshow' : 'Start Slideshow'}
        </SlideshowButton>
      </Navigation>
    </StyledHeader>
  )
}

export default Header
