const validateInputs = (field: string, value: string | number): boolean => {
  switch (field) {
    case 'name':
      if (!value || (typeof value === 'string' && value.length < 2)) return false;
      break;

    case 'surname':
      if (!value || (typeof value === 'string' && value.length < 2)) return false;
      break;

    case 'birthday':
      if (!value || (typeof value === 'number' && value > 1104537600000)) return false;
      break;

    case 'family':
      if (!value) return false;
      break;

    case 'gender':
      if (!value) return false;
      break;

    case 'avatar':
      if (!value) return false;
      break;

    case 'notifications':
      if (!value) return false;
      break;
  }
  return true;
};

export default validateInputs;
