const breakpoints = {
  tabletMin: 700,
  laptopMin: 1000,
  desktopMin: 1250,
}

const queries = {
  tabletUp: `(min-width: ${breakpoints.tabletMin / 16}rem)`,
  laptopUp: `(min-width: ${breakpoints.laptopMin / 16}rem)`,
  desktopUp: `(min-width: ${breakpoints.desktopMin / 16}rem)`,
}

export default queries
