import dayjs from 'dayjs'
import { PostFetch, urls } from './apiBase'

const createCPRF = async (value: number) => {
  return PostFetch(`${urls.POST_CPRF}`,
    {
      "amount_cpr": value,
      "date_start": dayjs().format('MM/DD/YYYY')
    }
  )
}

export const apiDefault = {
  createCPRF,
}
