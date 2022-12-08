import * as React from "react";
import * as dayjs from 'dayjs'
import { v4 as uuidv4 } from 'uuid';
import { calcAutoClosingDate, calcClosingAmount, calcRate } from "../utils/helpers";
import { CPRFList, CPRF } from "./types";
import { apiDefault } from "../api/webApi";
import { toast } from "react-toastify";

interface Props {
  children: React.ReactNode;
}

export const CPRFContext = React.createContext<CPRFList | null>(null)

const CPRFProvider: React.FC<Props> = ({ children }) => {

  const [CPRFs, setCPRFList] = React.useState<CPRF[]>([
    {
      id: uuidv4(),
      initialAmount: 5000,
      type: 'bullet',
      status: 'ativa',
      rate: calcRate(new Date(dayjs('2022-11-16T13:39:11-03:00').toString())),
      signedDate: new Date(dayjs('2022-11-16T13:39:11-03:00').toString()),
      autoClosingDate: calcAutoClosingDate(new Date(dayjs('2022-11-16T13:39:11-03:00').toString())),
    },{
      id: uuidv4(),
      initialAmount: 10000,
      type: 'ipca',
      status: 'liquidada',
      rate: calcRate(new Date(dayjs('2022-10-16T13:39:11-03:00').toString())),
      signedDate: new Date(dayjs('2021-10-16T13:39:11-03:00').toString()),
      autoClosingDate: calcAutoClosingDate(new Date(dayjs('2022-10-16T13:39:11-03:00').toString())),
      closingDate: new Date(dayjs('2022-10-16T13:39:11-03:00').toString()),
      closingAmount: calcClosingAmount(new Date(dayjs('2022-10-16T13:39:11-03:00').toString()), 10000)
    }
  ])

  const createCPRF = async (value: number) => {
    let typeCPRF = value >= 5000 ? 'cupom' : 'bullet'
    let response = await apiDefault.createCPRF(value)

    let newCPRF = {
      id: uuidv4(),
      initialAmount: value,
      type: typeCPRF,
      status: 'ativa',
      rate: typeCPRF === 'cupom' ? response.cupom.rate : response.bullet.rate,
      signedDate: typeCPRF === 'cupom' ? response.cupom.startDate : response.bullet.startDate,
      autoClosingDate: typeCPRF === 'cupom' ? response.cupom.endDate : response.bullet.endDate
    }

    saveCPRF(newCPRF)
  }

  const saveCPRF = (CPRF: CPRF) => {
    setCPRFList([...CPRFs, CPRF])
    toast.success("CPRF adicionada!", {
      position: toast.POSITION.TOP_RIGHT
    });
  };

  const updateCPRF = (id: string) => {
    CPRFs.filter((cprf: CPRF) => {
      if (cprf.id === id) {
        cprf.status = 'liquidada',
        cprf.closingDate = new Date(),
        cprf.closingAmount = calcClosingAmount(cprf.signedDate, cprf.initialAmount);

        setCPRFList([...CPRFs])

        toast.success("CPRF liquidada!", {
          position: toast.POSITION.TOP_RIGHT
        });
      }
    })
  }

  return (
    <CPRFContext.Provider value={{ CPRFs, saveCPRF, createCPRF, updateCPRF }}>
      {children}
    </CPRFContext.Provider>
  );
};

export default CPRFProvider;
