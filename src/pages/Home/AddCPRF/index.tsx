import React, { FC, useState } from 'react'

import { Container, Content, DisplayDate, Title, Label, DataContainer } from './styles';
import * as dayjs from 'dayjs'
import { CPRF } from '../../../store/types';
import Button from '../../../components/Button';
import { calcClosingAmount } from '../../../utils/helpers';
import Input from '../../../components/Input';


const CPRFDetail = () => {
  const [loading, setLoading] = useState(false)
  const [cprfValue, setCprfValue] = useState<any | null>(null)

  const errorValue = (cprfValue < 5000 || cprfValue > 10000000) && cprfValue > 0

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
            disabled={errorValue}
            type="primary"
            loading={loading}
            onClick={() => null}
          />
        </Content>
      </Container>
    </>
  )
}

export default CPRFDetail
