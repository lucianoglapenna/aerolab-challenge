// core
import axios from 'axios'

// config
import config from '../utils/config'

const baseUrl = 'https://coding-challenge-api.aerolab.co'
const authorization = { headers: { 'authorization' : `${config.TOKEN}` } }

const getAll = async () => {
  const res = await axios.get(`${baseUrl}/user/history/`, authorization)

  // we return the data already sorted
  const sortedHistory = res.data.sort((a,b) => new Date(b.createDate) - new Date(a.createDate))

  return sortedHistory
}

const redeem = async productId => {
  const res = await axios.post(`${baseUrl}/redeem/`, { productId }, authorization)

  return res.data
}

const service = {
  getAll,
  redeem
}
export default service