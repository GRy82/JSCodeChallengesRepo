// 40 is passing in this class. Grades are rounded up to the 
// nearest multiple of 5 if they are within 2 points of that 
// multiple. For grades that are not passing, or not passing even
// after rounding, roudning is abstained from.

function gradingStudents(grades){
    return grades.map(grade => {
        if (grade >= 38){
            let roundedUpGrade = grade - (grade % 5) + 5;
            if(roundedUpGrade - grade <= 2)
                return roundedUpGrade;
        }
        return grade;
    });
}