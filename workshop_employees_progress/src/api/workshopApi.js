import axios from 'axios'

const BASE_URL = 'http://localhost:4000/api/workshops'

export async function getWorkshops() {
  const res = await axios.get(BASE_URL)
  return res.data
}
