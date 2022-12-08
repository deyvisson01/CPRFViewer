import styled from 'styled-components'

export const Container = styled.div`
  width: 98%;
  display: flex;
  justify-content: center;
  padding: 10px 10px 10px 20px;
  margin: 10px;
  border-radius: var(--border-radius-md);
  box-shadow: var(--box-shadow-level-1);
  background-color: var(--background-green-primary);
`
export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  align-items: center;
`
export const DataContainer = styled.div`
  display: flex;

  div{
    display: flex;
    flex-direction: column;
    margin-right: 50px;
  }
`

export const Label = styled.span`
  font-size: var(--size-12);
  color: var(--white);
`

export const Title = styled.h1`
  font-size: var(--size-24);
  color: var(--white);
  margin-bottom: 20px;
`

export const DisplayDate = styled.span`
  font-size: var(--size-16);
  color: var(--white);
`
