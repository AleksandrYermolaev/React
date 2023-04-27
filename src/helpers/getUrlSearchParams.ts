const getUrlSearchParams = (search: string | null, page: number): string => {
  if (search) {
    if (page !== 1) {
      return `?name=${search}&page=${page}`;
    } else {
      return `?name=${search}`;
    }
  } else if (page !== 1) {
    return `?page=${page}`;
  }
  return '';
};

export default getUrlSearchParams;
