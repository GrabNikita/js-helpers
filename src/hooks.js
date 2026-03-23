import React, {useEffect, useMemo, useRef} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import i18n from '../localization/index';

export function usePrevious(value) {
	const ref = useRef();
	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
}

export function useQueryParams() {
	const location = useLocation();
	const navigate = useNavigate();

	const queryParams = useMemo(() => {
		const params = new URLSearchParams(location.search);
		return {
			get: (key) => params.get(key),
			getAll: (key) => params.getAll(key),
			set: (key, value) => {
				params.set(key, value);
				navigate({ search: params.toString() });
			},
		};
	}, [location.search, navigate]);

	return queryParams;
}

export const useI18nResources = (i18nInstance, localization) => {
	const {ns, resources} = localization;

	useEffect(() => {
		if (i18nInstance && resources) {
			Object.keys(resources).forEach(lng => {
				i18nInstance.addResources(lng, ns, resources[lng]);
			});
		}
	}, [i18nInstance, ns, resources]);
};