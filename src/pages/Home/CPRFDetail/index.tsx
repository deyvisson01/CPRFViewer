import React, { FC, useState } from 'react'

import { Container, Content, DisplayDate, Title, Label, DataContainer } from './styles';
import * as dayjs from 'dayjs'
import { CPRF } from '../../../store/types';
import Button from '../../../components/Button';
import { calcClosingAmount } from '../../../utils/helpers';

type Props = {
  cprf: CPRF,
  endCPRF: () => void
}

const CPRFDetail = (props: Props) => {
  const [loading, setLoading] = useState(false)

  return (
    <>
      <Container>
        <Content>
          <Label>Status da CPRF</Label>
          <Title>{props.cprf.status.toUpperCase()}</Title>
          <DataContainer>
            <div>
              <div>
                <Label>Investimento inicial</Label>
                <Title>{props.cprf.initialAmount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Title>
              </div>

              <div>
                <Label>Data de compra</Label>
                <DisplayDate>{dayjs(props.cprf.signedDate).format('DD/MM/YYYY')}</DisplayDate>
              </div>
            </div>
            <div>
              <div>
                <Label>Taxa</Label>
                <Title>{props.cprf.rate + `%`}{props.cprf.type === 'ipca' && ' + IPCA'}</Title>
              </div>
              <div>
                {props.cprf.status === 'liquidada' ?
                  <>
                    <Label>Data de liquidez</Label>
                    <DisplayDate>{dayjs(props.cprf.closingDate).format('DD/MM/YYYY')}</DisplayDate>
                  </>
                  :
                  <>
                    <Label>Data de liquidez automática</Label>
                    <DisplayDate>{dayjs(props.cprf.autoClosingDate).format('DD/MM/YYYY')}</DisplayDate>
                  </>
                }
              </div>
            </div>

            <div>

              <div>
                {props.cprf.status === 'liquidada' ?
                  <>
                    <Label>Valor liquidado</Label>
                    <Title>{props?.cprf?.closingAmount?.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Title>
                  </>
                  :
                  <>
                    <Label>Valor total estimado</Label>
                    <Title>{calcClosingAmount(props.cprf.signedDate, props.cprf.initialAmount).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Title>
                  </>
                }
              </div>
              <div>
                <Label>Tipo de CPRF</Label>
                <Title>{props.cprf.type.toUpperCase()}</Title>
              </div>
            </div>
          </DataContainer>
          <Button
            children={props.cprf.status === 'liquidada' ? 'Liquidada' : 'Liquidar'}
            disabled={props.cprf.status === 'liquidada'}
            type="primary"
            loading={loading}
            onClick={() => props.endCPRF()}
          />
        </Content>
      </Container>
    </>
  )
}

export default CPRFDetail
