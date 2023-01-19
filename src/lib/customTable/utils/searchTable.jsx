/**
 *
 * Searchs all the tables values for a specific expression
 *
 * @function searchTable
 *
 * @param table is the input data that needs to be searched, it has to be an array of objects
 * @param input is a string to look for in the table
 *
 * @returns a new table with only objects for which a value matches the input string
 *
 */

export default function searchTable(table, input) {
	let data = table
	data = data.filter((item) => Object.keys(item).some((key) => item[key].toLowerCase().includes(input.toLowerCase())))
	return data
}
