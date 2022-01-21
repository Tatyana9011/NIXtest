export const convertToPrice = (price) => {
  return price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });
};

export const totalPriceItems = order => {
  const countTopping = order.topping && order.topping.filter(item => item.checked).length;
  const priceTopping = (order.price * 0.1) * countTopping;
  return (order.price + priceTopping) * order.count;
};
export const validateFormData = formData => {

  if (formData.pass === formData.pass2) {
    return true
  }
  return true;
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