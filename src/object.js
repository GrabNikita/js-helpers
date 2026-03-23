export function isObject(variable) {
	return typeof variable === 'object' && variable !== null;
}

export function isEmptyObject(object) {
	if(!isObject(object)) {
		return true;
	}
	for(let prop in object) {
		if(Object.prototype.hasOwnProperty.call(object, prop)) {
			return false;
		}
	}

	return JSON.stringify(object) === JSON.stringify({});
}

export function isEntity(variable) {
	return isObject(variable) && variable.hasOwnProperty('id');
}

export function isEntityChanged(prevEntity, curEntity) {
	if(!isEntity(prevEntity) && !isEntity(prevEntity)) {
		return false;
	}
	if(!isEntity(prevEntity) && isEntity(curEntity)) {
		return true;
	}
	if(isEntity(prevEntity) && !isEntity(curEntity)) {
		return true;
	}
	return prevEntity.id !== curEntity.id;
}