export interface CPRF {
  id: string
  initialAmount: number
  type: string
  status: string
  rate: number
  signedDate: Date
  autoClosingDate: Date
  closingDate?: Date
  closingAmount?: number
}

export type CPRFList = {
  CPRFs: CPRF[];
  saveCPRF: (todo: CPRF) => void;
  updateCPRF: (id: string) => void;
}
