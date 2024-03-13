interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

interface Directors extends Teacher {
	numberOfReports: number;
}

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
	return `${firstName.charAt(0)}. ${lastName}`;
}

interface StudentConstructorInterface {
	firstName: string;
	lastName: string;
}

interface StudentClassInterface {
	workOnHomework(): string;
	displayName(): string;
}

class StudentClass implements StudentClassInterface {
	firstName: string;
	lastName: string;

	constructor(args: StudentConstructorInterface) {

		this.firstName = args.firstName;
		this.lastName = args.lastName;
	}

	workOnHomework(): string {

		return 'Currently working';
	}

	displayName(): string {

		return `${this.firstName}`;
	}
}
