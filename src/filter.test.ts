import { createSubsetMatcher } from './filter.js';

describe('createSubsetMatcher', () => {
  describe('given no values', () => {
    const match = createSubsetMatcher();

    it.each([
      ['undefined', undefined],
      ['null', null],
      ['empty string', ''],
      ['non-empty string', 'abc123'],
      ['array with no elements', []],
      ['array with undefined', [undefined]],
      ['array with null', [null]],
      ['array with empty string', ['']],
      ['array with non-empty string', ['abc123']],
    ])('allows %s', (_, value) => expect(match(value)).toBe(true));
  });

  describe('given one value', () => {
    const match = createSubsetMatcher(1);

    it.each([
      ['matching element', 1],
      ['array with matching element only', [1]],
      ['array with matching elements only', [1, 1]],
      ['array with matching and non-matching elements', [2, 1, 3]],
    ])('allows %s', (_, value) => expect(match(value)).toBe(true));

    it.each([
      ['non-matching element', 2],
      ['array with no elements', []],
      ['array with non-matching elements only', [3, 2]],
    ])('denies %s', (_, value) => expect(match(value)).toBe(false));
  });

  describe('given two values', () => {
    const match = createSubsetMatcher(['a', 'b']);

    it.each([
      ['matching element', 'a'],
      ['array with first matching element only', ['a']],
      ['array with second matching element only', ['b']],
      ['array with both matching elements', ['b', 'a']],
      ['array with matching and non-matching elements', ['c', 'a', 'd', 'b']],
    ])('allows %s', (_, value) => expect(match(value)).toBe(true));

    it.each([
      ['non-matching element', 'c'],
      ['no elements', []],
      ['non-matching elements only', ['d', 'c']],
    ])('denies array with %s', (_, value) => expect(match(value)).toBe(false));
  });
});
