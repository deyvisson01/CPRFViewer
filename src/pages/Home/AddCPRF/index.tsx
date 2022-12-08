import React, { useState } from 'react'

import { Container, Content, DataContainer } from './styles';
import { CPRFList } from '../../../store/types';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { CPRFContext } from '../../../store/context';

type Props = {
  closeModal: () => void
}

const CPRFDetail = (props: Props) => {
  const [loading, setLoading] = useState(false)
  const [cprfValue, setCprfValue] = useState<any | null>(null)

  const { createCPRF } = React.useContext(CPRFContext) as CPRFList;

  const errorValue = (cprfValue < 5000 || cprfValue > 10000000) && cprfValue > 0

  const submit = async () => {
    setLoading(true)
    await createCPRF(parseInt(cprfValue))
    props.closeModal()
    setLoading(false)
  }

  return (
    <>
      <Container>
        <Content>
          <DataContainer>
            <Input
              width="500px"
              type={'number'}
              placeholder="Entre com o valor a ser investido"
              error={errorValue}
              errorMessage={'O investimento deve estar entre R$ 5.000,00 e R$ 10.000.000,00'}
              defaultValue={cprfValue}
              onChange={e => setCprfValue(e.target.value)}
            />
          </DataContainer>
          <Button
            children='FINALIZAR'
            disabled={errorValue || cprfValue == 0 || loading}
            type="primary"
            loading={loading}
            onClick={() => submit()}
          />
        </Content>
      </Container>
    </>
  )
}

export default CPRFDetail
