import styled from 'styled-components'

interface Props {
  background?: string
}

export const Container = styled.div<Props>`
  display: flex;
  justify-content: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    width: 12.5rem;
    height: 2.3rem;

    cursor: pointer;

    font-size: 0.8rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    text-transform: uppercase;

    transition: background 0.5s;

    &.disabled {
      opacity: 0.53;
      cursor: default;
    }

    :focus {
      outline: none;
    }

    &.primary {
      background-color: var(--color-blue-base);
      color: var(--white);
      border: 1px solid var(--color-blue-base);

      img {
        margin-left: 0;
        margin-right: 0.3rem;
      }

      :not(:disabled):hover {
        opacity: 0.8;
      }
    }

    &.outlined {
      background-color: var(--background-white);
      color: var(--color-blue-base);
      border: 1px solid var(--color-blue-base);

      img {
        margin-left: 0;
        margin-right: 0.3rem;
      }

      :not(:disabled):hover {
        background-color: var(--color-blue-base);
        color: var(--white);
      }
    }

    &.danger {
      background-color: var(--background-white);
      color: var(--background-button-danger);
      border: 1px solid var(--background-button-danger);

      :not(:disabled):hover {
        background-color: var(--background-button-danger);
        color: var(--background-white);
        border: 1px solid var(--background-button-danger);
      }
    }
  }
`
