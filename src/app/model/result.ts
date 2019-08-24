import {Student} from './student';
import {Score} from './score';

export interface Result {
  student: Student;
  scores: Score[];
}
