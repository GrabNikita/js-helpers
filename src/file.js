import {isEntity} from './object';

export function isImage(file) {
	if(!isEntity(file)) {
		return false;
	}

	const regexp = /^image/i;

	return regexp.test(file.mime);
}

export function isVideo(file) {
	if(!isEntity(file)) {
		return false;
	}

	const regexp = /^video/i;

	return regexp.test(file.mime);
}