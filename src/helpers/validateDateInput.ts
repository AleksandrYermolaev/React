export const validateDateInput = (value: number | undefined): string => {
  if (!value) {
    return 'field is required';
  }
  if (value > 1104537600000) {
    return 'only users over 18 y.o. allowed';
  }
  return '';
};
