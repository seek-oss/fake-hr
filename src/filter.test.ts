import { createSubsetMatcher } from './filter';

describe('createSubsetMatcher', () => {
  describe('given no values', () => {
    const match = createSubsetMatcher();

    it.each([
      ['no elements', []],
      ['undefined', [undefined]],
      ['null', [null]],
      ['empty string', ['']],
      ['non-empty string', ['abc123']],
    ])('allows array with %s', (_, value) => expect(match(value)).toBe(true));
  });

  describe('given one value', () => {
    const match = createSubsetMatcher(1);

    it.each([
      ['matching element only', [1]],
      ['matching elements only', [1, 1]],
      ['mix of matching and non-matching elements', [2, 1, 3]],
    ])('allows array with %s', (_, value) => expect(match(value)).toBe(true));

    it.each([
      ['no elements', []],
      ['non-matching elements only', [3, 2]],
    ])('denies array with %s', (_, value) => expect(match(value)).toBe(false));
  });

  describe('given two values', () => {
    const match = createSubsetMatcher(['a', 'b']);

    it.each([
      ['first matching element only', ['a']],
      ['second matching element only', ['b']],
      ['both matching elements', ['b', 'a']],
      ['mix of matching and non-matching elements', ['c', 'a', 'd', 'b']],
    ])('allows array with %s', (_, value) => expect(match(value)).toBe(true));

    it.each([
      ['no elements', []],
      ['non-matching elements only', ['d', 'c']],
    ])('denies array with %s', (_, value) => expect(match(value)).toBe(false));
  });
});
