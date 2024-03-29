/**
 * The alpha-2 identifier of a country per ISO 3166.
 */
export type CountryCode =
  | 'ar'
  | 'au'
  | 'be'
  | 'ca'
  | 'ch'
  | 'cn'
  | 'de'
  | 'dk'
  | 'fr'
  | 'gb'
  | 'hk'
  | 'jp'
  | 'kr'
  | 'mx'
  | 'my'
  | 'nl'
  | 'nz'
  | 'ru'
  | 'se'
  | 'sg'
  | 'tw'
  | 'us';

/**
 * An institution that offers an education programme.
 */
export interface EducationInstitution {
  countries: readonly CountryCode[];
  levels: readonly EducationLevel[];
  name: string;
}

/**
 * The level of an education programme per ISCED 2011.
 */
export type EducationLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

/**
 * A certificate, diploma, degree, or similar that is granted upon successful
 * completion of an education programme.
 */
export interface EducationQualification {
  countries?: readonly CountryCode[];
  level: EducationLevel;
  name: string;
}
