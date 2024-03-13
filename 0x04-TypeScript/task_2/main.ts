interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

interface CreateEmployeeInterface {
	(salary: number | string): Director | Teacher;
}

class Director implements DirectorInterface {
	workFromHome(): string {

		return 'Working from home';
	}

	getCoffeeBreak(): string {

		return 'Getting a coffee break';
	}

	workDirectorTasks(): string {

		return 'Getting to director tasks';
	}
}

class Teacher implements TeacherInterface {
	workFromHome(): string {

		return 'Cannot work from home';
	}

	getCoffeeBreak(): string {

		return 'Cannot have a break';
	}

	workTeacherTasks(): string {

		return 'Getting to work';
	}
}

const createEmployee: CreateEmployeeInterface = (salary: number | string): Director | Teacher => {
	if (typeof salary === 'number' && salary < 500) {

		return new Teacher;
	} else {

		return new Director;
	}
}
