import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--gradient-blue-base);

  .waves {
    position:relative;
    width: 100%;
    height:25vh;

    min-height:100px;
  }

  /* Animation */

  .parallax > use {
    animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
  }
  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
  @keyframes move-forever {
    0% {
    transform: translate3d(-90px,0,0);
    }
    100% {
      transform: translate3d(85px,0,0);
    }
  }
  /*Shrinking for mobile*/
  @media (max-width: 768px) {
    .waves {
      height:40px;
      min-height:40px;
    }
    .content {
      height:30vh;
    }
    h1 {
      font-size:24px;
    }
  }

`
export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  `
export const Form = styled.div`
  width: 100%;
  max-width: 600px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: var(--border-radius-md);
  box-shadow: var(--box-shadow-level-4);

  background-color: white;

  button{
    margin: 50px 0;
  }
`

export const Title = styled.h1`
  margin: 50px 0;
  font-size: var(--size-40);
  color: var(--color-blue-base);
`
