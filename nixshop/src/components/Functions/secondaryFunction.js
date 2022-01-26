export const convertToPrice = (price) => {
  return price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });
};

export const totalPriceItems = order => {
  const countTopping = order.topping && order.topping.filter(item => item.checked).length;
  const priceTopping = (order.price * 0.1) * countTopping;
  return (order.price + priceTopping) * order.count;
};

export const validateFormData = (formData, setMessage, user) => {
  if (formData.email && formData.pass && formData.pass2 && formData.login) {
    if (formData.pass !== formData.pass2) {
      setMessage('Пароли не совпадают', { color: 'red' });
      return false;
    }
    if (user !== null) {
      setMessage('Пользователь с таким логином или паролем уже существует!', { color: 'red' });
      return false;
    }
    if (!formData.pass.trim() || !formData.login.trim()) {
      setMessage('Поле с логином или паролем не может быть пустым', { color: 'red' });
      return false;
    }
    return true;
  } else if (formData.pass && formData.login && !formData.email && !formData.pass2) {
    if (!formData.pass.trim() || !formData.login.trim()) {
      setMessage('Поле с логином или паролем не может быть пустым', { color: 'red' });
      return false;
    }
    if (user === null) {
      setMessage('Пользователь не найден', { color: 'red' });
      return false;
    }
    return true;
  }
}

export const countGoodsCart = (data, id) => {
  let count = 0;
  if (data.length) {
    data.filter(item => {
      if (+item.id === +id) {
        count++;
      }
    });
  }
  return count;
}

export function saveDataJSON(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

export function getDataStorage(name) {
  return JSON.parse(localStorage.getItem(name));
}

export function removeDataStorage(name) {
  localStorage.removeItem(name);
}

export function examinationDataStorage() {
  const name = getDataStorage('name');
  const URL = getDataStorage('URL');

  if (!name || !URL) {
    return false;
  }
  return true;
}