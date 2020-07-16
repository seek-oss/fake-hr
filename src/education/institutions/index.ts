import { createSubsetMatcher } from '../../filter';
import type {
  CountryCode,
  EducationInstitution,
  EducationLevel,
} from '../../types';

import * as au from './au';
import * as nz from './nz';
import * as row from './row';

/**
 * A list of all education institutions in our limited data set.
 */
export const all: EducationInstitution[] = [
  au.tafes,
  au.universities,
  nz.itps,
  nz.universities,
  row.universities,
].flat();

interface FilterProps {
  /**
   * Limit institutions to those that operate in at least one of the specified
   * countries.
   *
   * Omit this filter to return institutions from all countries.
   */
  country?: CountryCode | CountryCode[] | ReadonlyArray<CountryCode>;

  /**
   * Limit institutions to those that offer an education programme that
   * corresponds to at least one of the specified ISCED 2011 levels.
   *
   * Omit this filter to return institutions regardless of education level.
   */
  level?: EducationLevel | EducationLevel[] | ReadonlyArray<EducationLevel>;
}

/**
 * Filter the list of education institutions in our limited data set.
 */
export const filter = ({
  country,
  level,
}: FilterProps = {}): EducationInstitution[] => {
  const matchesCountry = createSubsetMatcher(country);
  const matchesLevel = createSubsetMatcher(level);

  return all.filter(
    (institution) =>
      matchesCountry(institution.countries) && matchesLevel(institution.levels),
  );
};
