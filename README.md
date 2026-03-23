[![npm version](https://badge.fury.io/js/GrabNikita/js-helpers.svg)](https://www.npmjs.com/package/GrabNikita/js-helpers)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![GitHub issues](https://img.shields.io/github/issues/GrabNikita/js-helpers)](https://github.com/GrabNikita/js-helpers/issues)
[![GitHub stars](https://img.shields.io/github/stars/GrabNikita/js-helpers)](https://github.com/GrabNikita/js-helpers/stargazers)

A collection of JavaScript utility functions and React hooks for everyday development tasks.

## 📦 Installation

```bash
npm install deadbox583-js-helpers
```

## Features

📅 DateTime Utilities - Format dates, times, work with timezones

🔧 Array Helpers - Search, replace, and remove items by ID

🎣 React Hooks - Custom hooks for common React patterns

📝 String Utilities - Phone formatting, base64 encoding, text manipulation

🧰 Object Helpers - Type checking, entity validation

📁 File Utilities - File type detection (images, videos)

👤 User Utilities - User name formatting


## Examples

### Array

```javascript
import { 
  entitiesListToMap, 
  removeFromArrayById, 
  replaceInArrayById, 
  getFromArrayById 
} from 'deadbox583-js-helpers';

const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
const userMap = entitiesListToMap(users, 'user_'); // { user_1: { id: 1, name: 'John' }, user_2: { id: 2, name: 'Jane' } }
const user = getFromArrayById(users, 1); // { id: 1, name: 'John' }
const updatedUsers = removeFromArrayById([...users], 1); // [{ id: 2, name: 'Jane' }]
const replacedUsers = replaceInArrayById(users, 1, { id: 1, name: 'Updated John' });
```

### DateTime

```javascript
import { 
  formatDate, 
  formatTime, 
  formatDateTime,
  formatDateMonth,
  formatTimeDuration,
  isWeekend,
  setMoscowTimezone,
  getMonthName
} from 'deadbox583-js-helpers';

const date = new Date(2026, 2, 23, 14, 30, 0);
formatDate(date);                    // "23.03.2026"
htmlFormatDate(date);                // "2026-03-23"

formatTime(date);                    // "14:30"
formatTime(date, true);              // "14:30:00"
formatDateTime(date);                // "14:30 23.03.2026"
formatDateMonth(date);               // "23.03"
formatTimeDuration(2.5 * 60 * 60 * 1000);  // "02:30"

isWeekend(date);                     // false (if March 23 is not weekend)

const mskDate = setMoscowTimezone(date);
getMonthName(date);                  // "Март"
getMonthShortName(date);             // "Март"
```

### String

```javascript
import { 
  formatPhone, 
  clearPhone, 
  toBase64, 
  fromBase64,
  addLeadZeros,
  toString
} from 'deadbox583-js-helpers';

formatPhone('79161234567');          // "+7 (916) 123-45-67"
clearPhone('+7 (916) 123-45-67');    // "79161234567"

toBase64('Hello World');             // "SGVsbG8gV29ybGQ="
fromBase64('SGVsbG8gV29ybGQ=');      // "Hello World"

addLeadZeros(42, 5);                 // "00042"

toString(null);                      // ""
toString(123);                       // "123"
```

### Object

```javascript
import { 
  isObject, 
  isEmptyObject, 
  isEntity, 
  isEntityChanged 
} from 'deadbox583-js-helpers';

isObject({});                        // true
isObject(null);                      // false

isEmptyObject({});                   // true
isEmptyObject({ key: 'value' });     // false

isEntity({ id: 1, name: 'John' });   // true
isEntity({ name: 'John' });          // false

const oldUser = { id: 1, name: 'John' };
const newUser = { id: 1, name: 'Jane' };
isEntityChanged(oldUser, newUser);   // false (same ID)

const updatedUser = { id: 2, name: 'Jane' };
isEntityChanged(oldUser, updatedUser); // true (different ID)
```

### React Hooks

```javascript
import { usePrevious, useQueryParams, useI18nResources } from 'deadbox583-js-helpers';

function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  
  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function SearchPage() {
  const queryParams = useQueryParams();
  
  const searchTerm = queryParams.get('q');
  const setSearchTerm = (term) => queryParams.set('q', term);
  
  return (
    <input 
      value={searchTerm} 
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

import localization from './localization'; // {ns: 'app', resources: {en: { title: 'Main page' }, ru: { title: 'Главная страница' }}}

function App({ i18n }) {
	useI18nResources(i18n, localization);
	const {t} = useTranslation(localization.ns);
  
  return <div>{i18n.t('title')}</div>;
}
```

### File

```javascript
import { isImage, isVideo } from 'deadbox583-js-helpers';

const file = { id: 1, mime: 'image/jpeg', name: 'photo.jpg' };

isImage(file);                       // true
isVideo(file);                       // false

const video = { id: 2, mime: 'video/mp4', name: 'video.mp4' };
isVideo(video);                      // true
```

### General

```javascript
import { isEmpty, getValueName } from 'deadbox583-js-helpers';

isEmpty(null);                       // true
isEmpty(undefined);                  // true
isEmpty('');                         // true
isEmpty(0);                          // true
isEmpty([]);                         // true
isEmpty([1, 2, 3]);                  // false
isEmpty({});                         // false

// Get value name from enum
const statusNames = {
  1: 'Active',
  2: 'Inactive',
  3: 'Pending'
};

getValueName(statusNames, 1);        // "Active"
getValueName(statusNames, 5);        // "Неизвестно"
getValueName(statusNames, 5, 'Unknown'); // "Unknown"
```

### User

```javascript
import { getInitials } from 'deadbox583-js-helpers';

const user = {
  id: 1,
  name: 'Иван',
  surname: 'Иванов',
  patronymic: 'Иванович'
};

getInitials(user);                   // "Иванов И. И."
```

## Requirements
React >= 16.8.0 (for hooks and JSX components)

React Router DOM >= 6.0.0 (for useQueryParams hook)

i18next >= 19.0.0 (for useI18nResources hook)

## License
ISC © Grab Nikita

## Contact
GitHub: @deadbox583

npm: deadbox583-js-helpers