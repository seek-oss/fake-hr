import * as oNet from './oNet';
import * as theSims from './theSims';

/**
 * A list of all competencies in our limited data set.
 */
export const all: string[] = [oNet.abilitiesAndSkills, theSims.skills].flat();
