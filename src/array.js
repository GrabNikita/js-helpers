import {isEntity} from './object';
import {isEmpty} from './tools';

/**
 * @param {array} array
 * @param {string} keyPrefix
 * @returns {object}
 * */
export function entitiesListToMap(array, keyPrefix = '') {
	let map = {};
	array.forEach(item => {
		if(!isEntity(item)) {
			return;
		}
		let key = item.id;
		if(!isEmpty(keyPrefix)) {
			key = keyPrefix + item.id;
		}
		map[key] = item;
	});
	return map;
}

/**
 * @param {array} array
 * @param {number} removedId
 * @returns {array}
 * */
export function removeFromArrayById(array, removedId) {
	array.forEach((item, index) => {
		if(item.id === removedId) {
			array.splice(index, 1);
		}
	});

	return array;
}

/**
 * @param {array} array
 * @param {number} replacedId
 * @param {object} replaceItem
 * @returns {array}
 * */
export function replaceInArrayById(array, replacedId, replaceItem) {
	return array.map((item) => {
		if(item.id === replacedId) {
			return replaceItem;
		}

		return item;
	});
}

/**
 * @param {array} array
 * @param {number} desiredId
 * @returns {object} desiredItem
 * */
export function getFromArrayById(array, desiredId) {
	return array.find((item) => item.id === desiredId);
}