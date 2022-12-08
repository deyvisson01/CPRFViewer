import React, { FC } from 'react'

import { Container, Content, DisplayDate, Title, Label, DataContainer } from './styles';
import * as dayjs from 'dayjs'
import logo from '../../../assets/logo.svg'
import { CPRF } from '../../../store/types';

type Props = {
  cprf: CPRF,
  showDetails: () => void
}

const Item = (props: Props) => {

  return (
    <>
      <Container>
        <Content onClick={props.showDetails}>
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
                <Title>{props.cprf.rate+`%`}{props.cprf.type === 'ipca' && ' + IPCA'}</Title>
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
          </DataContainer>
        </Content>
        <img src={logo} alt="Deletar evento"/>
      </Container>
    </>
  )
}

export default Item
