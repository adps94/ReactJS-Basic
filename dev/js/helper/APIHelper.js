import axios from 'axios';
import request from 'superagent';
import localForage from 'localforage';

// axios.defaults.baseURL = 'http://localhost:3000/api/v1/app/';
axios.defaults.baseURL = 'http://app.schoolsafe.co/api/v1/app/';

const transformRequest = config => localForage.getItem('reduxPersist:login')
  .then((response) => {
    const headerConf = config;
    const res = JSON.parse(response);
    if (res.user.token) {
      headerConf.headers['X-Access-token'] = res.user.token;
    }
    headerConf.headers['Content-Type'] = 'application/json';
    console.log(headerConf);
    return headerConf;
  })
  .catch(() => config);

axios.interceptors.request.use(config => transformRequest(config), error => Promise.reject(error));

axios.interceptors.response.use((response) => {
  //console.log(response);
  return response;
}, (error) => {
  if (error.response) {
    console.log(error.response);
    const errorMessage = error.response.data.message;
    if (error.response.status === 401) {

    } else if (error.response.status === 404) {

    } else if (error.response.status === 409) {

    } else if (error.response.status === 422) {

    } else if (error.response.status === 500) {

    } else {

    }
  } else {
    // Something happened in setting up the request that triggered an Error

  }
  // Do something with request error
  return Promise.reject(error);
});

export const contacts = () => {
  const requestUrl = `contact/me`;
  return axios.get(requestUrl);
};

export const login = (loginObj) => {
  const requestUrl = 'auth/login';
  return axios.post(requestUrl, loginObj);
};
