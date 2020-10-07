require("jest-localstorage-mock");

export const setItem = (attribute, value) => {
  localStorage.setItem(attribute, value);
}

export const getItem = (attribute) => {
  const dataGot = localStorage.getItem(attribute);
  return dataGot;
}

export const removeItem = (attribute) => {
  localStorage.removeItem(attribute);
}