//complete this code
class Person {
	constructor(name,age){
		this.name = name;
		this.age = age;
		get getName(){
			return this.name;
		}
		set changeAge(newAge){
			return this.newAge;
		}
		
	}
	
}

class Student extends Person {
	study(){
		console.log(+this.name+"is studying");
	}
}

class Teacher extends Person {
	teach(){
		console.log(+this.name+"is teaching");
	}
}
const person = new Person("viswa","22");
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
