import React, { useState } from 'react'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//assets
import Novo from '../../assets/novo.png'

//components
import Button from '../../components/Button';
import Header from '../../components/Header';
import { CPRFContext } from '../../store/context';
import { CPRFList } from '../../store/types';
import Item from './Item';
import { Container, ContainerButton, ContainerForm, Content, ListCPRFs, Title, TitleModal } from './styles';


function Home() {
  const { CPRFs } = React.useContext(CPRFContext) as CPRFList;

  return (
    <>
      <ToastContainer />
      <Container>
        <Header />
        <Content>
          <ListCPRFs>
            {CPRFs && CPRFs.map(cprf => (
              <Item cprf={cprf} />
            ))}
          </ListCPRFs>
        </Content>
      </Container>
    </>
  );
}

export default Home;
