import api from './AxiosInstance.ts';

export const UserService = {
  getAllUsers() {
    return api.get('/users');
  }
};

