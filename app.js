// /* eslint-disable no-undef */
const Student = (function(){
	let firstname = "";
	let lastname = "";
	let grade = [];
		
		return {
			student(fname, lname) {
				firstname = fname;
				lastname = lname;
				grade = [];
			},
			getAverageGrade() {
				let total = 0;
				for (const elem of grade) {
					total += elem;
				}
				let avg = total/grade.length;
				// let avg = this.grade.reduce((accm, curr) => (accm + curr)/this.grade.length);
				return avg;
			},
			enterGrade(val) {
				grade.push(val);
			},
			getStudentInfo() {
				return `${firstname} ${lastname}: ${this.getAverageGrade()}`;
				
			}
			
		}
})();

// const Student = (function(){

// 	  const students = [{fname: "", lname: "", grade: []}];
// 		// let lname, fname, grade;
// 		return {
// 			student(fname, lname) {
// 				this.student[fname] = fname;
// 				this.student[lname] = lname;
// 				this.student.grade = [];
				
// 				// this.grade = [];
// 			},
// 			getAverageGrade() {
// 				let avg = 0;
// 				for (const elem of this.students) {
// 					avg = this.student[elem].grade.reduce((accm, cur)=> (accm + cur)/this.student[elem].grade.length);
// 				}
// 				// console.log(total/grade.length);
// 				return avg;
// 			},
// 			enterGrade(val) {
// 				for (const elem of this.studnets) {
// 					this.student[elem].grade.push(val);
					
// 				}
// 			},
// 			getStudentInfo() {
				
// 				return `${this.fname} ${this.lname}: ${this.getAverageGrade()}`;
// 			}
// 		}
// })();

Student.student("Edward", "Jack");
Student.enterGrade(100);
Student.enterGrade(90);
Student.enterGrade(80);
Student.getAverageGrade();
console.log(Student.getStudentInfo());

Student.student("John", "Smith");
Student.enterGrade(90);
Student.enterGrade(80);
Student.enterGrade(70);
Student.getAverageGrade();
console.log(Student.getStudentInfo());