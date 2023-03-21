export const validateCheckInput = (value: boolean | undefined): string => {
  if (!value) {
    return 'field is required';
  }
  return '';
};
