import * as axios from 'axios';

//--no-cors
const instence = axios.create({
  baseURL: 'http://localhost:5050',
  /* headers: {
    'Access-Control-Expose-Headers' : 'X-Total-Count'
  } */
});

export const authAPI = {
  login(pass, login) {
    return (
      instence.get(`/users?login=${login}&pass=${pass}`)
    );
  },
  
  loginOut(id) {
    return instence.delete(`/users/${id}`);
  },

  authorization(email, pass, login) {
    return instence.post(`/users`, {
      email: email,
      login: login,
      pass: pass,
    });
  },
}

export const goodsAPI = {
  goodsAll(pageSize, page) { 
    return instence.get(`/goods?_page=${page}&_limit=${pageSize}`);
  },
  goodsPageFilterAPI(pageSize, page, filter, value) {
    return instence.get(`/goods?${filter}=${value}&_page=${page}&_limit=${pageSize}`);
  },
}

