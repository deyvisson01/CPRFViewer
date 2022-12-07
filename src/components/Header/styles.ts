import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  text-align: center;

  z-index: 2;
  width: 100vw;
  height: 120px;
  position: relative;
  position: fixed;
  top: 0;
  left: 0;

  padding: 0 20px;
  background: var(--white);

  h2 {
    font-size: var(--size-24);
    font-weight: var(--font-weight-extra-bold);
    font-stretch: normal;
    font-style: normal;
    line-height: normal;

    color: var(--black);
  }
`
