import React from 'react';

/**
 * @param {string} text
 * @param {boolean} centering
 * @return {array}
 * */
export function formatMultilineText(text, centering = false) {
	if(typeof text !== 'string') {
		return null;
	}
	return text.split('\n').map((piece, index) => {
		return <div key={index} className={centering ? 'multiline-text-center' : ''}>{piece}</div>;
	});
}

/**
 * @param variable
 * @return {string}
 * */
export function toString(variable) {
	if(variable === null || variable === undefined) {
		return '';
	}
	return '' + variable + '';
}

export function addLeadZeros(number, size) {
	number = number.toString();
	let zeroCount = size - number.length;
	if(zeroCount > 0) {
		number = '0'.repeat(zeroCount) + number;
	}
	return number;
}

export function toBase64(string) {
	return encodeURIComponent(btoa(string));
}

export function fromBase64(string) {
	return decodeURIComponent(atob(string));
}

/**
 * @param {string} phone
 * @return {string}
 * */
export function clearPhone(phone) {
	const removeNotDigitRegExp = new RegExp(/[^0-9]/ig);
	return phone.replace(removeNotDigitRegExp, '');
}

/**
 * @param {string} phone
 * @return {string}
 * */
export function formatPhone(phone) {
	phone = clearPhone(phone);

	return '+7 (' + phone.substring(0, 3) + ') ' + phone.substring(3, 6) + '-' + phone.substring(6, 8)
		+ '-' + phone.substring(8, 10);
}

/**
 * @param {string} phone
 * @return {string}
 * */
export function removeCountryCodeFromPhone(phone) {
	const removePlus7RegExp = new RegExp(/^\+7/i);
	let newPhone = phone.replace(removePlus7RegExp, '');
	newPhone = clearPhone(newPhone);
	if(newPhone.length >= 11) {
		const removeStart8RegExp = new RegExp(/^8/i);
		newPhone = newPhone.replace(removeStart8RegExp, '');
	}
	return newPhone;
}