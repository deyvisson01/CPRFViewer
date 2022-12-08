import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ListCPRFs = styled.div`
  width: 80%;
  height: 100%;
  margin: 130px 0 20px 0;
  padding: 20px 10px;
  min-width: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: var(--border-radius-md);
  box-shadow: var(--box-shadow-level-4);

  .div-title{
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    img{
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }
`

export const TopListContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.h1`
  font-size: var(--size-40);
  color: var(--color-blue-base);
`

export const TitleModal = styled.h2`
  width: 100%;
  text-align: center;
  font-size: var(--size-24);
  color: var(--white);
  margin: 20px 0;

  span{
    font-size: var(--size-24);
    color: var(--text-danger);
  }
`

export const ContainerButton = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;
`

export const ContainerForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;

  *:after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
