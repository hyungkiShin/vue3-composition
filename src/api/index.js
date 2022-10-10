import axios from 'axios';

function create(baseURL, options) {
  axios.headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': 'true',
  };
  const instance = axios.create(Object.assign({ baseURL }, options));

  return instance;
}

export const posts = create(`${import.meta.env.VITE_APP_API_URL}posts/`);
// development : http://localhost:5000/posts/
// production : http://localhost:5001/posts/
