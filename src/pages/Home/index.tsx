import React, { useState } from 'react'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//assets
import Novo from '../../assets/novo.png'

//components
import Button from '../../components/Button';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import { CPRFContext } from '../../store/context';
import { CPRF, CPRFList } from '../../store/types';
import Item from './Item';
import CPRFDetail from './CPRFDetail';
import { Container, ContainerButton, ContainerForm, Content, ListCPRFs, Title, TitleModal } from './styles';


function Home() {
  const { CPRFs, updateCPRF } = React.useContext(CPRFContext) as CPRFList;

  const [showDetailModal, setShowDetailModal] = useState(false)
  const [cprfDetails, setCprfDetails] = useState<CPRF>()

  const showDetails = (cprf: CPRF) => {
    setCprfDetails(cprf)
    setShowDetailModal(true)
  }

  const settleCPRF = (cprf: CPRF) => {
    updateCPRF(cprf.id)
    setShowDetailModal(false)
  }

  return (
    <>
      <ToastContainer />
      <Container>
        <Header />
        <Content>
          <ListCPRFs>
            {CPRFs && CPRFs.map(cprf => (
              <Item cprf={cprf} showDetails={() => showDetails(cprf)} />
            ))}
          </ListCPRFs>
        </Content>
      </Container>

      {showDetailModal && (
        <Modal
          maxWidth={'70%'}
          width={'70%'}
          title="Detalhes da CPRF"
          onClose={() => setShowDetailModal(false)}
        >
          <CPRFDetail cprf={cprfDetails!} endCPRF={() => settleCPRF(cprfDetails!)}/>
        </Modal>
      )}
    </>
  );
}

export default Home;
