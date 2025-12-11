import axiosInstance from './axiosInstance';

const loginApi = {
  login: (data) => {
    const payload = {
      username: data.username || data.Username,
      password: data.password || data.Password,
    };
    return axiosInstance.post('/account/login', payload);
  },
};

export default loginApi;
