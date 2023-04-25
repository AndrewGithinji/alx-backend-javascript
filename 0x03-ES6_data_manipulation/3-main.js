import getListStudents from './1-get_list_student_ids';
import getStudentIdsSum from './3-get_ids_sum';

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);
