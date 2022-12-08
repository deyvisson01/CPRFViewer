import api from './api'
export const urlApi = 'https://api.qa.finpec.agr.br/financial'

export const urls = {
  POST_CPRF: `${urlApi}/simulationCpr`,
}

export const PostFetch = async (
  url: string,
  params?: any,
) => {
  try {
    const data = await api.post(url, params)
    return data.data
  } catch (error) {
    throw error
  }
}
