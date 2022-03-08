export const pageAnimation = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
}

type slideAnimationReturnType = {
  x: string
  opacity: number
}

export const slideAnimation = {
  enter: (direction: number): slideAnimationReturnType => {
    return {
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }
  },
  center: {
    x: '0%',
    opacity: 1,
  },
  exit: (direction: number): slideAnimationReturnType => {
    return {
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }
  },
}

export const galleryAnimation = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      ease: 'easeOut',
      delayChildren: 1.5,
    },
  },
}

export const captionAnimation = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 5.25,
      duration: 2,
    },
  },
}

export const cardAnimation = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}
