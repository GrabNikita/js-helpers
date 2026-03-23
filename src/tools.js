export function isEmpty(variable) {
	return (
		variable === null
		|| variable === undefined
		|| variable === 0
		|| variable === ''
		|| (Array.isArray(variable) && variable.length < 1)
	);
}

export function getValueName(names, value, undefinedName = 'Неизвестно') {
	if(names.hasOwnProperty(value)) {
		return names[value];
	}
	return undefinedName;
}