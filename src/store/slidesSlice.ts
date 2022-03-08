import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'store'
import data from 'data/data.json'
import { Painting } from 'models/painting'

type SlidesSlice = {
  slides: Painting[]
  direction: number
  currentSlideIndex: number
  isPlaying: boolean
}

const initialSlidesState: SlidesSlice = {
  slides: data,
  direction: 0,
  currentSlideIndex: 0,
  isPlaying: false,
}

const slidesSlice = createSlice({
  name: 'slideshow',
  initialState: initialSlidesState,
  reducers: {
    setCurrentSlide: (state, action: PayloadAction<number>) => {
      state.currentSlideIndex = action.payload
    },
    paginate: (state, action: PayloadAction<number>) => {
      const direction = action.payload
      if (direction > 0) {
        state.currentSlideIndex =
          (state.currentSlideIndex + 1) % state.slides.length
      } else {
        state.currentSlideIndex =
          (state.currentSlideIndex - 1 + state.slides.length) %
          state.slides.length
      }
      state.direction = direction
    },
    toggleIsPlaying: state => {
      state.isPlaying = !state.isPlaying
    },
    resetSlider: state => {
      state.currentSlideIndex = 0
      state.direction = 0
      state.isPlaying = false
    },
  },
})

export const numberOfSlides = (state: RootState): number =>
  state.slideshow.slides.length

export const currentSlideIndex = (state: RootState): number =>
  state.slideshow.currentSlideIndex

export const currentSlide = (state: RootState): Painting =>
  state.slideshow.slides[state.slideshow.currentSlideIndex]

export const slidesDirection = (state: RootState): number =>
  state.slideshow.direction

export const isPlaying = (state: RootState): boolean =>
  state.slideshow.isPlaying

export const { paginate, setCurrentSlide, toggleIsPlaying, resetSlider } =
  slidesSlice.actions

export default slidesSlice.reducer
