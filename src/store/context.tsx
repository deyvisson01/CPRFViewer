import * as React from "react";
import * as dayjs from 'dayjs'
import { v4 as uuidv4 } from 'uuid';
import { calcAutoClosingDate, calcClosingAmount, calcRate } from "../utils/helpers";
import { CPRFList, CPRF } from "./types";

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

  const saveCPRF = (CPRF: CPRF) => {
    const newCPRF: CPRF = {
      id: uuidv4(),
      initialAmount: CPRF.initialAmount,
      type: CPRF.type,
      status: CPRF.status,
      rate: CPRF.rate,
      signedDate: CPRF.signedDate,
      autoClosingDate: CPRF.autoClosingDate,
      closingDate: CPRF.autoClosingDate,
      closingAmount: CPRF.closingAmount,
    };
    setCPRFList([...CPRFs, newCPRF])
  };

  const updateCPRF = (id: string) => {
    CPRFs.filter((cprf: CPRF) => {
      if (cprf.id === id) {
        cprf.status = 'liquidada',
        cprf.closingDate = new Date(),
        cprf.closingAmount = calcClosingAmount(cprf.signedDate, cprf.initialAmount);

        setCPRFList([...CPRFs])
      }
    })
  }

  return (
    <CPRFContext.Provider value={{ CPRFs, saveCPRF, updateCPRF }}>
      {children}
    </CPRFContext.Provider>
  );
};

export default CPRFProvider;
