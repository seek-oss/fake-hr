const isArray = <T>(input: T | ReadonlyArray<T>): input is ReadonlyArray<T> =>
  Array.isArray(input);

export const createSubsetMatcher = <T>(
  value?: T | ReadonlyArray<T>,
): ((input: T | ReadonlyArray<T>) => boolean) => {
  if (typeof value === 'undefined') {
    return () => true;
  }

  const values = new Set(isArray(value) ? value : [value]);

  return (input) =>
    isArray(input) ? input.some((i) => values.has(i)) : values.has(input);
};
