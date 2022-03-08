import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion'
import FocusTrap from 'focus-trap-react'
import { useCallback, useEffect, useRef } from 'react'

import { currentSlide } from 'store/slidesSlice'
import { isOpen, closeLightBox } from 'store/lightboxSlice'
import { CloseButton, ImageWrapper, Overlay } from './Lightbox.styles'

const LightboxRoot = document.getElementById('lightbox') as HTMLElement

const LightBox = (): JSX.Element => {
  const current = useSelector(currentSlide)
  const isLightboxOpen = useSelector(isOpen)
  const dispatch = useDispatch()
  const modalRef = useRef<HTMLDivElement>(null)

  const handleClose = useCallback(() => dispatch(closeLightBox()), [dispatch])

  const handleEsc = useCallback(
    event => {
      if (event.keyCode === 27) {
        handleClose()
      }
    },
    [handleClose]
  )

  const handleClickOutside = (e: React.MouseEvent<HTMLElement>) => {
    if (modalRef.current === e.target) {
      handleClose()
    }
  }

  useEffect(() => {
    isLightboxOpen
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'initial')
  }, [isLightboxOpen])

  useEffect(() => {
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [handleEsc])

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isLightboxOpen && (
        <FocusTrap>
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.3 }}
            transition={{ duration: 0.3 }}
            ref={modalRef}
            onClick={handleClickOutside}
          >
            <ImageWrapper>
              <img src={current.images.gallery} alt={current.name} />
              <CloseButton onClick={() => dispatch(closeLightBox())}>
                Close
              </CloseButton>
            </ImageWrapper>
          </Overlay>
        </FocusTrap>
      )}
    </AnimatePresence>,
    LightboxRoot
  )
}

export default LightBox
