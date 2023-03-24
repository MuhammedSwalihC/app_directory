export const requestHeaders = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return { Authorization: "Bearer " + token };
  } else {
    return {};
  }
}
