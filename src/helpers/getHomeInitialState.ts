const getInitialState = (): string => {
  let searchValue = localStorage.getItem('search');
  if (!searchValue) {
    searchValue = '';
  }
  return searchValue;
};

export default getInitialState;
