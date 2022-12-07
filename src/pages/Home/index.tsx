import React, { useState } from 'react'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//assets
import Novo from '../../assets/novo.png'

//components
import Button from '../../components/Button';
import Header from '../../components/Header';
import { Container, ContainerButton, ContainerForm, Content, ListCPRFs, Title, TitleModal } from './styles';

function Home() {

  return (
    <>
      <ToastContainer />
      <Container>
        <Header />
        <Content>
          <ListCPRFs>

          </ListCPRFs>
        </Content>
      </Container>
    </>
  );
}

export default Home;
