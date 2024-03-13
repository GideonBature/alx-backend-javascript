const Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
};

const student1: Student = {
	firstName: 'Gideon',
	lastName: 'Bature',
	age: 26,
	location: 'Kaduna'
}

const student2: Student = {
	firstName: 'Grace',
	lastName: 'Ajogi',
	age: 25,
	location: 'Minna'
}

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = table.createTBody();

studentsList.forEach((student) => {
	const row: HTMLTableRowElement = tbody.insertRow();
	const firstNameCell: HTMLTableCellElement = row.insertCell();
	const locationCell: HTMLTableCellElement = row.insertCell();
	
	firstNameCell.textContent = student.firstName;
	locationCell.textContent = student.location;
});

document.body.appendChild(table);
