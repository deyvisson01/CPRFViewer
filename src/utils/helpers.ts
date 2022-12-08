
export function calcClosingAmount(date: Date, initialAmount: number): number {
  return calcRate(date)*(initialAmount/100) + initialAmount
}

export function calcFinalAmount(signedDate: Date, closingDate: Date, initialAmount: number): number {
  let diffM = new Date(signedDate).getTime() - new Date(closingDate).getTime()
  let diffDays = diffM / (1000 * 60 * 60 * 24)
  let days = parseInt(diffDays.toFixed(0))

  let rate = days * 0.03835

  return rate*(initialAmount/100) + initialAmount
}

// Calc rate using today's date
export function calcRate(date: Date): number {
  let diffM = new Date().getTime() - new Date(date).getTime()
  let diffDays = diffM / (1000 * 60 * 60 * 24)
  let days = parseInt(diffDays.toFixed(0))

  return parseFloat((days*0.03835).toFixed(4))
}

export function calcFinalRate(startDate: Date, endDate: Date): number {
  let diffM = new Date(endDate).getTime() - new Date(startDate).getTime()
  let diffDays = diffM / (1000 * 60 * 60 * 24)
  let days = parseInt(diffDays.toFixed(0))

  return parseFloat((days*0.03835).toFixed(4))
}

// Adding 1 year
export function calcAutoClosingDate(signedDate: Date): Date {
  var newDate = new Date(signedDate);
  newDate.setDate(signedDate.getDate() + 365);
  return newDate
}
