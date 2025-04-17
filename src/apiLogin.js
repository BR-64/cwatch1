import axios from 'axios';

const sendLogin = async (term) => {
  const response = await axios.get('https://localhost', {
    headers: {},
    params: { term },
  });

  return response.data.results;
};

export default sendLogin;
