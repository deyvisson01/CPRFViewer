import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }

  :root {
    /* Size */
    --size-8: 8px;
    --size-16: 16px;
    --size-24: 24px;
    --size-32: 32px;
    --size-40: 40px;
    --size-48: 48px;
    --size-56: 56px;
    --size-64: 64px;
    --size-72: 72px;
    --size-80: 80px;
    --size-88: 88px;
    --size-96: 96px;
    --size-104: 104px;
    --size-112: 112px;

    /* Border radius */
    --border-radius-none: 0;
    --border-radius-sm: 4px;
    --border-radius-md: 8px;
    --border-radius-lg: 24px;
    --border-radius-pill: 500px;
    --border-radius-circular: 50%;

    /* Box shadow */
    --box-shadow-level-1: 0 4px 16px rgba(0, 0, 0, 0.1);
    --box-shadow-level-2: 0 8px 24px rgba(0, 0, 0, 0.2);
    --box-shadow-level-3: 0 16px 32px rgba(0, 0, 0, 0.3);
    --box-shadow-level-4: 0 16px 48px rgba(0, 0, 0, 0.4);

    /* Font weight */
    --font-weight-thin: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semi-bold: 600;
    --font-weight-bold: 700;
    --font-weight-extra-bold: 800;

     /* Blue */
    --color-blue-dark: #0016e2;
    --color-blue-base: #5262ff;
    --color-blue-light: #adb5ff;

    --color-orange-base: #d7ac07;

     /* Background gradient */
    --gradient-blue-base: linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%);

    --white: #FFF;
    --yellow: #e5bf00;

    --background-green-primary: #03dd8a;
    --background-white: #fff;
    --background-button: #03dd8a;
    --background-button-danger: #ee5d6d;
    --input-background: #3d4151;

    --link-color: #ffe581;
    --text-danger: #ee5d6d;

    --text-primary: #fff;
    --text-secundary: #fff;

    --checkbox: #4b4f5f;

    --background-primary: #323647;
    --background-secundary: #2a2e3e;
    --background-secundary-lg: #3a3e4e;
    --background-modal: #343a50;
    --border-line: #343a50;
    --background-degrade: #3b4056;
    --background-grey: #485171;
  }
`
