export const createSubsetMatcher = <T>(
  value?: T | T[],
): ((inputs: ReadonlyArray<T>) => boolean) => {
  if (typeof value === 'undefined') {
    return () => true;
  }

  const values = new Set(Array.isArray(value) ? value : [value]);

  return (inputs) => inputs.some((input) => values.has(input));
};
