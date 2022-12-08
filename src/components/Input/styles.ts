import styled, { css } from 'styled-components'

interface Props {
  isErrored?: boolean
}

export const Container = styled.div<Props>`
  margin: 10px 0;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 6px;
`

export const TitleInput = styled.div`
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;

  p {
    font-size: 12px;
    font-weight: 900;

    color: black;
  }

  small {
    margin-left: 6px;
    font-size: 10px;
    color: #927602;
  }
`

export const Content = styled.div`
  width: 100%;
  height: var(--size-48);
  display: flex;
  align-items: center;

  border: 2px solid var(--input-background);
  border-radius: 6px;
  color: var(--color-blue-light);
  & + div {
    margin-top: 8px;
  }
  ${(p: Props) =>
    p.isErrored &&
    css`
      border-color: #bf2a2a;
    `}
  svg {
    margin-right: 10px;
  }
  input {
    padding: 0 10px;
    width: 100%;
    height: 100%;
    background: var(--white);
    border-radius: 6px;
    font-size: 14px;

    border: 0;
    outline: none;
    color: var(--input-background);

    &::placeholder {
      color: var(--input-background);
    }

    &:read-only {
      color: var(--input-background);
    }
  }
`

export const ErrorCaption = styled.p`
  margin: 5px;

  font-size: 12px;
  text-align: center;

  color: #bf2a2a;
`
