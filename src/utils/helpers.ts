
export function calcClosingAmount(date: Date, initialAmount: number): number {
  return calcRate(date)*initialAmount
}

// Calc rate using today's date
export function calcRate(date: Date): number {
  let diffM = new Date().getTime() - new Date(date).getTime()
  let diffDays = diffM / (1000 * 60 * 60 * 24)
  let days = parseInt(diffDays.toFixed(0))

  return days*0.03835
}

// Adding 1 year
export function calcAutoClosingDate(signedDate: Date): Date {
  var newDate = new Date();
  newDate.setDate(signedDate.getDate() + 365);
  return newDate
}
