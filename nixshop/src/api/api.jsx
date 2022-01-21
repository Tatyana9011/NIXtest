import * as axios from 'axios';


const instence = axios.create({
  baseURL:'http://localhost:5050',

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


export const goodsAPI = async (pageSize=8, currentPage=1) => { 
 const response = await fetch(`http://localhost:5050/goods?_page=${currentPage}&_limit=${pageSize}`);
  if (!response.ok) {
    throw 'Ошибочка вышла' + response.status; 
  }
  return response.json();
}

export const goodsPageFilterAPI = async (pageSize=8, currentPage=1, filter,value) => { 
 const response = await fetch(`http://localhost:5050/goods?${filter}=${value}&_page=${currentPage}&_limit=${pageSize}`);
  if (!response.ok) {
    throw 'Ошибочка вышла' + response.status; 
  }
  return response.json();
}

export const goodsTotalCountAPI = async () => { 
 const response = await fetch('http://localhost:5050/totalCount');
  if (!response.ok) {
    throw 'Ошибочка вышла' + response.status;  //какая ошибка 
  }
  return response.json();
}

