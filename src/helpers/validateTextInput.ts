export const validateTextInput = (value: string | undefined): string => {
  if (!value) {
    return 'field is required';
  }
  if (value.length <= 1) {
    return 'field must be longer than 1 symbol';
  }
  return '';
};
