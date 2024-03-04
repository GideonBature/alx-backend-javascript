 export default function iterateThroughObject(reportWithIterator) {
	 let result = '';

	 for (const employee of reportWithIterator) {
		 if (result) {
			 result += ' | ';
		 }
		 result += employee;
	 }
	 return result;
}
