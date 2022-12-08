import React, { useEffect, useState } from 'react'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//components
import Button from '../../components/Button';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import { CPRFContext } from '../../store/context';
import { CPRF, CPRFList } from '../../store/types';
import Item from './Item';
import CPRFDetail from './CPRFDetail';
import AddCPRF from './AddCPRF';
import { Container, Content, FilterContainer, ListCPRFs, TopListContainer } from './styles';
import DropDownMenu from '../../components/DropDownMenu';


function Home() {
  const { CPRFs, updateCPRF } = React.useContext(CPRFContext) as CPRFList;
  const [CPRFsFiltered, setCPRFsFiltered] = useState<CPRF[]>(CPRFs)

  const [status, setStatus] = useState('')
  const [value, setValue] = useState('')

  const [showAddModal, setShowAddModal] = useState(false)
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

  const statusList = ['ativa', 'liquidada']
  const typeList = ['cupom', 'bullet', 'ipca']

  const setFilter = (type: string, value: string) => {
    switch (type) {
      case 'status':
        setCPRFsFiltered(CPRFs.filter(item => item.status === value))
        break;
      case 'type':
        setCPRFsFiltered(CPRFs.filter(item => item.type === value))
        break;
      case 'date':
        setCPRFsFiltered(CPRFs.sort((a, b) => (a.signedDate < b.signedDate) ? -1 : 1))
        break;
      case 'clean':
        setCPRFsFiltered(CPRFs)
        break;

      default:
        break;
    }
  }

  const returnOption = (status: string, value: string) => {
    setStatus(status)
    setValue(value)
  }

  useEffect(() => {
    setCPRFsFiltered(CPRFs)
  }, [CPRFs])

  useEffect(() => {
    setFilter(status, value)
  },[status, value])

  return (
    <>
      <ToastContainer />
      <Container>
        <Header />
        <Content>
          <ListCPRFs>
            <TopListContainer>
              <FilterContainer>
                <DropDownMenu data={statusList} title='Selecione o status' type='status' dispatchFilter={returnOption}/>
                <DropDownMenu data={typeList} title='Selecione o tipo' type='type' dispatchFilter={returnOption}/>
              </FilterContainer>
              <Button
                children='NOVA CPRF'
                disabled={false}
                type="outlined"
                loading={false}
                onClick={() => setShowAddModal(true)}
              />
            </TopListContainer>
            {CPRFsFiltered && CPRFsFiltered.map(cprf => (
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
      {showAddModal && (
        <Modal
          maxWidth={'70%'}
          width={'70%'}
          title="Adquirir nova CPRF"
          onClose={() => setShowAddModal(false)}
        >
          <AddCPRF closeModal={() => setShowAddModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default Home;
