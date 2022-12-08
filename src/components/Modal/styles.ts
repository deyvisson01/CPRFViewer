import styled from 'styled-components'

interface Props {
  background?: string
  maxHeight?: string
  maxWidth?: string
  height?: string
  width?: string
  playerHeight?: string
  disableOverflow?: boolean
}

export const Content = styled.div<Props>`
  .wrapper-modal {
    color: #2a2e3f59;
    position: fixed;
    background-color: #2a2e3fc9;
    width: 100%;
    height: 100%;
    display: flex;

    justify-content: center;
    align-items: center;
    align-self: center;
    align-content: center;
    top: 0;
    left: 0;
    z-index: 1500;
  }

  .content-modal {
    height: ${(p: Props) => p.playerHeight};
  }

  .modal {
    overflow-y: ${(p: Props) => (p.disableOverflow ? 'visible' : 'auto')};
    overflow-x: ${(p: Props) => (p.disableOverflow ? 'visible' : 'hidden')};
    width: 85%;
    border-radius: 13px;
    background-color: var(--background-secundary-lg);
    max-height: ${(p: Props) => (p.maxHeight ? p.maxHeight : '85%')};
    height: ${(p: Props) => p.height};

    z-index: 100;

    @media (min-width: 1024px) {
      width: ${(p: Props) => (p.width ? p.width : '60%')};
      max-width: ${(p: Props) => p.maxWidth};
      max-height: ${(p: Props) => p.maxHeight};
      height: ${(p: Props) => p.height};
    }
  }

  .title-modal {
    width: 100%;
    padding: 20px 0;

    display: flex;
    justify-content: center;

    border-radius: 13px;
    background-color: #3e4663;
  }

  .title-modal > div {
    width: 95%;
    font-size: 22px;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    color: #ffffff;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;

    text-align: center;
    text-transform: uppercase;
  }

  .close-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    color: #ffffff;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 22px;
    padding-right: 20px;
    transition: 0.3s;
  }

  .close-button:hover {
    color: var(--primary-color);
  }
`
