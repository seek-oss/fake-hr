const isArray = <T>(input: T | readonly T[]): input is readonly T[] =>
  Array.isArray(input);

export const createSubsetMatcher = <T>(
  value?: T | readonly T[],
): ((input: T | readonly T[]) => boolean) => {
  if (typeof value === 'undefined') {
    return () => true;
  }

  const values = new Set(isArray(value) ? value : [value]);

  return (input) =>
    isArray(input) ? input.some((i) => values.has(i)) : values.has(input);
};
