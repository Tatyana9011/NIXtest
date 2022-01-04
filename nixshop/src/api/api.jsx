import * as axios from 'axios';


const instence = axios.create({
  baseURL:'https://lockalost:3000',

});

export const authAPI = {

  login(email, password, rememberMe) {
    return (
      instence.post(`?email=${email}`, {
        email: email,
        password: password,
        rememberMe: rememberMe
      })
    );
  },
  
  loginUt() {
    return instence.delete(`auth/login`);
  }
}


