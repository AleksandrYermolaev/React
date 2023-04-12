function debounce<T = unknown, U = void>(
  callback: (args: T) => U,
  delay = 1000
): (args: T) => Promise<U> {
  let timer: NodeJS.Timeout;

  return (args: T): Promise<U> => {
    return new Promise((resolve) => {
      if (timer) clearInterval(timer);
      timer = setTimeout(() => resolve(callback(args)), delay);
    });
  };
}

export default debounce;
