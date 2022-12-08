import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.qa.finpec.agr.br/financial/simulationCpr'
})

export default api
