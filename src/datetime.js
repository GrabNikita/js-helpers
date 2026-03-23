/**
 *
 * @param {number} milliseconds
 * @param {boolean} needSetMoscowTimezone
 * @returns {string}
 */
export function formatDateFromMilliseconds(milliseconds, needSetMoscowTimezone = true) {
	let date = new Date(milliseconds);
	return formatDate(date);
}

/**
 *
 * @param {Date} date
 * @param {boolean} needSetMoscowTimezone
 * @returns {string}
 */
export function formatDate(date, needSetMoscowTimezone = true) {
	if(needSetMoscowTimezone) {
		date = setMoscowTimezone(date);
	}
	let dateMonth = formatDateMonth(date, false);

	return dateMonth + '.' + date.getFullYear();
}

/**
 *
 * @param {Date} date
 * @param {boolean} needSetMoscowTimezone
 * @returns {string}
 */
export function htmlFormatDate(date, needSetMoscowTimezone = true) {
	if(needSetMoscowTimezone) {
		date = setMoscowTimezone(date);
	}
	let dateMonth = htmlFormatDateMonth(date, false);

	return date.getFullYear() + '-' + dateMonth;
}

/**
 *
 * @param {number} seconds
 * @param {boolean} needSetMoscowTimezone
 * @returns {string}
 */
export function formatDateFromTimeStamp(seconds, needSetMoscowTimezone = true) {
	return formatDateFromMilliseconds(seconds * 1000, needSetMoscowTimezone);
}

/**
 *@param {int} milliseconds
 * @param {boolean} needSeconds
 * @param {boolean} useUTC
 * @returns {string}
 * */
export function formatTimeFromMilliseconds(milliseconds, needSeconds = false, useUTC = false) {
	let date = new Date(milliseconds);
	return formatTime(date);
}

/**
 *@param {Date} date
 * @param {boolean} needSeconds
 * @param {boolean} useUTC
 * @returns {string}
 * */
export function formatTime(date, needSeconds = false, useUTC = false) {
	let hours = (useUTC ? date.getUTCHours() : date.getHours());
	let minutes = (useUTC ? date.getUTCMinutes() : date.getMinutes());
	if(hours < 10) {
		hours = '0' + hours;
	}
	if(minutes < 10) {
		minutes = '0' + minutes;
	}
	let time = hours + ':' + minutes;
	if(needSeconds) {
		let seconds = (useUTC ? date.getUTCSeconds() : date.getSeconds());
		if(seconds < 10) {
			seconds = '0' + seconds;
		}
		time += ':' + seconds;
	}
	return time;
}

/**
 * @param {int} hours
 * @param {int} minutes
 * @param {boolean} needSeconds
 * @param {int} seconds
 * @returns {string}
 * */
export function formatTimeFromInt(hours, minutes = 0, needSeconds = false, seconds = 0) {
	if(hours < 10) {
		hours = '0' + hours;
	}
	if(minutes < 10) {
		minutes = '0' + minutes;
	}
	let time = hours + ':' + minutes;
	if(needSeconds) {
		if(seconds < 10) {
			seconds = '0' + seconds;
		}
		time += ':' + seconds;
	}
	return time;
}

/**
 *@param {int} seconds
 * @param {boolean} needSeconds
 * @param {boolean} useUTC
 * @returns {string}
 * */
export function formatTimeFromTimestamp(seconds, needSeconds = false, useUTC = false) {
	return formatTimeFromMilliseconds(seconds * 1000, needSeconds, useUTC);
}

/**
 *@param {number} milliseconds
 * @param {boolean} needSetMoscowTimezone
 * @returns {string}
 * */
export function formatDateTimeFromMilliseconds(milliseconds, needSetMoscowTimezone = true) {
	return formatTimeFromMilliseconds(milliseconds, false, false) +
		' ' + formatDateFromMilliseconds(milliseconds, false);
}

/**
 *@param {Date} date
 * @param {boolean} needSetMoscowTimezone
 * @returns {string}
 * */
export function formatDateTime(date, needSetMoscowTimezone = true) {
	return formatTime(date, false, false) + ' ' + formatDate(date, false);
}

/**
 *@param {number} timestamp
 * @param needSetMoscowTimezone
 * @returns {string}
 * */
export function formatDateTimeFromTimestamp(timestamp, needSetMoscowTimezone = true) {
	return formatTimeFromMilliseconds(timestamp * 1000, false, false) +
		' ' + formatDateFromMilliseconds(timestamp * 1000, false);
}

/**
 *@param {number} timestamp
 * @param needSetMoscowTimezone
 * @returns {string}
 * */
export function formatDateMonthTimeFromTimestamp(timestamp, needSetMoscowTimezone = true) {
	return formatTimeFromMilliseconds(timestamp * 1000, false, false) +
		' ' + formatDateMonthFromMilliseconds(timestamp * 1000, false);
}

/**
 * @param {Date} date
 * @param {boolean} needSetMoscowTimezone
 * @param {string} separator
 * @return {string}
 * */
export function formatDateMonth(date, needSetMoscowTimezone = true, separator = '.') {
	let dt = new Date(date.getTime());
	if(needSetMoscowTimezone) {
		dt = setMoscowTimezone(dt);
	}
	let day = dt.getDate();
	if(day < 10) {
		day = '0' + day;
	}
	let month = dt.getMonth() + 1;
	if(month < 10) {
		month = '0' + month;
	}
	return day + separator + month;
}

/**
 * @param {Date} date
 * @param {boolean} needSetMoscowTimezone
 * @return {string}
 * */
export function htmlFormatDateMonth(date, needSetMoscowTimezone = true) {
	let dt = new Date(date.getTime());
	if(needSetMoscowTimezone) {
		dt = setMoscowTimezone(dt);
	}
	let day = dt.getDate();
	if(day < 10) {
		day = '0' + day;
	}
	let month = dt.getMonth() + 1;
	if(month < 10) {
		month = '0' + month;
	}
	return month + '-' + day;
}

/**
 * @param {int} seconds
 * @param {boolean} needSetMoscowTimezone
 * @param {string} separator
 * @return {string}
 * */
export function formatDateMonthFromSeconds(seconds, needSetMoscowTimezone = true, separator = '.') {
	let dt = secondsToDate(seconds);
	return formatDateMonth(dt, needSetMoscowTimezone, separator);
}

/**
 * @param {int} milliseconds
 * @param {boolean} needSetMoscowTimezone
 * @param {string} separator
 * @return {string}
 * */
export function formatDateMonthFromMilliseconds(milliseconds, needSetMoscowTimezone = true, separator = '/') {
	let date = new Date(milliseconds);
	return formatDateMonth(date, needSetMoscowTimezone, separator);
}

/**
 * @param {int} seconds
 * @param {boolean} needSeconds
 * @param {boolean} useUTC
 * @param {boolean} needSetMoscowTimezone
 * @param {string} separator
 * @return {string}
 * */
export function formatDateTimeInTwoLinesFromSeconds(
	seconds,
	needSeconds = false,
	useUTC = false,
	needSetMoscowTimezone = true,
	separator = '.'
) {
	return <div className={'date-time-in-two-lines'}>
		<div className={'line-1'}>{formatTimeFromTimestamp(seconds, needSeconds, useUTC)}</div>
		<div className={'line-2'}>{formatDateMonthFromSeconds(seconds, needSetMoscowTimezone, separator)}</div>
	</div>;
}

/**
 * @param {Date} date
 * @return {Date}
 * */
export function setMoscowTimezone(date) {
	let dt = new Date(date.getTime());
	dt.setHours(dt.getHours() + 3);
	return dt;
}

/**
 * @param {Date} date
 * @param {boolean} needSetMoscowTimezone
 * @return {string}
 * */
export function formatWeek(date, needSetMoscowTimezone = true) {
	let dt = setWeekDay(date, 1);
	if(needSetMoscowTimezone) {
		dt = setMoscowTimezone(dt);
	}
	let weekNumber = Math.floor(dt.getDate() / 7) + 1;
	let month = dt.getMonth() + 1;
	if(month < 10) {
		month = '0' + month;
	}

	return weekNumber + ' нед. ' + month;
}

export function getWeekDayName(weekDay) {
	switch(weekDay) {
		case 0:
			return 'Воскресенье';
		case 1:
			return 'Понедельник';
		case 2:
			return 'Вторник';
		case 3:
			return 'Среда';
		case 4:
			return 'Четверг';
		case 5:
			return 'Пятница';
		case 6:
			return 'Суббота ';
		default:
			return 'Неизвестно';
	}
}


/**
 *
 * @param {Date} datetime
 * @return {boolean}
 */
export function isWeekend(datetime) {
	let weekDay = datetime.getDay();
	return HOLIDAYS_NUMBERS.includes(weekDay);
}

/**
 * @param {Date} date1
 * @param {Date} date2
 * @return boolean
 * */
export function isEqualDate(date1, date2) {
	return date1.getDate() === date2.getDate() &&
		date1.getMonth() === date2.getMonth() &&
		date1.getFullYear() === date2.getFullYear();
}

/**
 * @param {Date} date
 * @return {Date}
 * */
export function setStartWeek(date) {
	let dt = new Date(date.getTime());
	dt.setHours(0, 0, 0, 0);
	let weekDay = dt.getDay();
	let diff = weekDay === 0 ? 6 : weekDay - 1;
	dt.setDate(dt.getDate() - diff);
	return dt;
}

/**
 * @param {Date} date
 * @return {Date}
 * */
export function setEndWeek(date) {
	let dt = new Date(date.getTime());
	dt.setHours(23, 59, 59, 999);
	let weekDay = dt.getDay();
	let diff = (weekDay === 0 ? 0 : 7 - weekDay);
	dt.setDate(dt.getDate() + diff);
	return dt;
}

/**
 * @param {Date} date
 * @return {Date}
 * */
export function setStartDay(date) {
	let dt = new Date(date.getTime());
	dt.setHours(0, 0, 0, 0);
	return dt;
}

/**
 * @param {Date} date
 * @return {Date}
 * */
export function setEndDay(date) {
	let dt = new Date(date.getTime());
	dt.setHours(23, 59, 59, 999);
	return dt;
}

/**
 * @param {int} milliseconds
 * @return {string}
 * */
export function formatTimeDuration(milliseconds) {
	let hours = Math.floor(milliseconds / MS_IN_HOUR);
	let minutesMilliseconds = milliseconds - hours * MS_IN_HOUR;
	let minutes = Math.floor(minutesMilliseconds / MS_IN_MINUTE);
	if(hours < 9) {
		hours = '0' + hours;
	}
	if(minutes < 9) {
		minutes = '0' + minutes;
	}
	return hours + ':' + minutes;
}

/**
 * @param {Date} date
 * @return {int}
 * */
export function dateToSeconds(date) {
	return millisecondsToSecond(date.getTime());
}

/**
 * @param {int} seconds
 * @return {Date}
 * */
export function secondsToDate(seconds) {
	let date = new Date();
	date.setTime(seconds * 1000);
	return date;
}

/**
 * @param {Date} date
 * @param {int} day
 * @return {Date}
 * */
export function setWeekDay(date, day) {
	let dt = new Date(date.getTime());
	let curDay = dt.getDay();
	let distance = day - curDay;
	dt.setDate(dt.getDate() + distance);
	return dt;
}


/**
 * @param {int} milliseconds
 * @return {int} seconds
 * */
export function millisecondsToSecond(milliseconds) {
	return Math.round(milliseconds / 1000);
}

/**
 * @param {int} milliseconds
 * @return {number} hours
 * */
export function millisecondsToHours(milliseconds) {
	return milliseconds / MS_IN_HOUR;
}

/**
 * @param {int} seconds
 * @return {int} milliseconds
 * */
export function secondsToMilliseconds(seconds) {
	return seconds * 1000;
}

/**
 * @param {string} timeString
 * @return {Date}
 * */
export function parseTime(timeString) {
	const date = new Date();
	const pieces = timeString.split(':');
	date.setHours(+pieces[0]);
	date.setMinutes(+pieces[1]);
	date.setSeconds(+pieces[2]);
	return date;
}

/**
 * @param {string} dateString
 * @return {Date}
 * */
export function parseDate(dateString) {
	const date = new Date();
	const pieces = date.split('.');
	date.setDate(+pieces[0]);
	date.setMonth(+pieces[1] - 1);
	date.setFullYear(+pieces[2]);
	return date;
}

/**
 * @param {Date} date
 * @return {string}
 * */
export function getMonthName(date) {
	switch(date.getMonth()) {
		case 0:
			return 'Январь';
		case 1:
			return 'Февраль';
		case 2:
			return 'Март';
		case 3:
			return 'Апрель';
		case 4:
			return 'Май';
		case 5:
			return 'Июнь';
		case 6:
			return 'Июль';
		case 7:
			return 'Август';
		case 8:
			return 'Сентябрь';
		case 9:
			return 'Октябрь';
		case 10:
			return 'Ноябрь';
		case 11:
			return 'Декабрь';
		default:
			return '';
	}
}

/**
 * @param {Date} date
 * @return {string}
 * */
export function getMonthShortName(date) {
	switch(date.getMonth()) {
		case 0:
			return 'Янв';
		case 1:
			return 'Фев';
		case 2:
			return 'Март';
		case 3:
			return 'Апр';
		case 4:
			return 'Май';
		case 5:
			return 'Июнь';
		case 6:
			return 'Июль';
		case 7:
			return 'Авг';
		case 8:
			return 'Сент';
		case 9:
			return 'Окт';
		case 10:
			return 'Нояб';
		case 11:
			return 'Дек';
		default:
			return '';
	}
}

export function getMonthNameWithFullYear(created) {
	return getMonthName(created) + ' ' + created.getFullYear();
}

export const HOLIDAYS_NUMBERS = [0, 6];
export const MS_IN_HOUR = 60 * 60 * 1000;
export const MS_IN_MINUTE = 60 * 1000;