import styled from 'styled-components/macro'

type ProgressBarProps = {
  width: number
}

const Wrapper = styled.div<ProgressBarProps>`
  position: relative;
  background-color: var(--color-grey-9);
  width: 100%;
  height: 0.0625rem;

  &::after {
    content: '';
    position: absolute;
    background-color: var(--color-black);
    height: 100%;
    width: ${props => `${props.width}%`};
  }
`

const ProgressBar: React.FC<ProgressBarProps> = ({ width }): JSX.Element => {
  return <Wrapper width={width}></Wrapper>
}

export default ProgressBar
