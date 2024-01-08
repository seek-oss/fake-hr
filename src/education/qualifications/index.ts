import { createSubsetMatcher } from '../../filter';
import type {
  CountryCode,
  EducationLevel,
  EducationQualification,
} from '../../types';

import * as au from './au';
import * as degree from './degree';

/**
 * A list of all education qualifications in our limited data set.
 */
export const all: EducationQualification[] = [
  au.certificate1s,
  au.certificate2s,
  au.certificate3s,
  au.certificate4s,
  au.diplomas,
  au.advancedDiplomas,
  degree.associates,
  degree.bachelors,
  degree.masters,
  degree.doctorals,
].flat();

interface FilterProps {
  /**
   * Limit qualifications to those that are granted in at least one of the
   * specified countries.
   *
   * Degrees are assumed to be non-country-specifc and are always returned.
   *
   * Omit this filter to return qualifications from all countries.
   */
  country?: CountryCode | CountryCode[] | readonly CountryCode[];

  /**
   * Limit qualifications to those that correspond to at least one of the
   * specified ISCED 2011 levels.
   *
   * Omit this filter to return qualifications regardless of education level.
   */
  level?: EducationLevel | EducationLevel[] | readonly EducationLevel[];
}

/**
 * Filter the list of education qualifications in our limited data set.
 */
export const filter = ({
  country,
  level,
}: FilterProps = {}): EducationQualification[] => {
  const matchesCountry = createSubsetMatcher(country);
  const matchesLevel = createSubsetMatcher(level);

  return all.filter(
    (institution) =>
      (institution.countries ? matchesCountry(institution.countries) : true) &&
      matchesLevel(institution.level),
  );
};
