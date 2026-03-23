import {isEntity} from './object';

export function getInitials(user) {
	if(!isEntity(user)) {
		return '';
	}
	return user.surname + ' ' + user.name.charAt(0) + '. ' + user.patronymic.charAt(0) + '.';
}