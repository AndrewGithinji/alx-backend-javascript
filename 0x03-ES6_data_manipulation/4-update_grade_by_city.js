export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const filteredList = studentsList.filter((student) => student.location === city);

  const updatedList = filteredList.map((student) => {
    const newGrade = newGrades.find((grade) => student.id === grade.studentId);

    if (newGrade) {
      return { ...student, grade: newGrade.grade };
    }

    return { ...student, grade: 'N/A' };
  });

  return updatedList;
}
