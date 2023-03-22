export const setErrorMessage = (field: string, value: string | number): string => {
  switch (field) {
    case 'name':
      if (!value) return 'field is required!';
      if (typeof value === 'string' && value.length < 2) return 'name must be 2 symbols or longer';
      break;

    case 'surname':
      if (!value) return 'field is required!';
      if (typeof value === 'string' && value.length < 2) return 'name must be 2 symbols or longer';
      break;

    case 'birthday':
      if (!value) return 'field is required!';
      if (typeof value === 'number' && value > 1104537600000)
        return 'only users over 18 y.o. allowed!';
      break;

    case 'family':
      if (!value) return 'field is required!';
      break;

    case 'gender':
      if (!value) return 'field is required!';
      break;

    case 'avatar':
      if (!value) return 'field is required!';
      break;

    case 'notifications':
      if (!value) return 'field is required!';
      break;
  }
  return '';
};

export default setErrorMessage;
