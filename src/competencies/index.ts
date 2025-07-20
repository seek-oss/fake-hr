import * as oNet from './oNet.js';
import * as theSims from './theSims.js';

/**
 * A list of all competencies in our limited data set.
 */
export const all: string[] = [oNet.abilitiesAndSkills, theSims.skills].flat();
