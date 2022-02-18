import axios from 'axios'

export const fetchData = async () => {
  const res = await axios.get(
    'https://api.github.com/repos/facebook/create-react-app/issues',
  )

  return res
}
