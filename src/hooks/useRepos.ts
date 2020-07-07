import React, { useState, useEffect } from 'react';

import { useAjax } from './useAjax';
import { useParams } from 'react-router-dom';
import { IGithubItem } from '../components/repo';
import { menuItems } from '../components/repo/menu.config';

const endpoint = 'https://api.github.com/search/repositories';

const getQuery = (lang: string) => (lang ? `language:${lang}` : 'is:public');
const isString = (str: any) => str.constructor === String;

interface IGithubResponse {
    total_count: number;
    items: IGithubItem[];
    incomplete_results: boolean;
}

export const useRepos = () => {
    const { lang } = useParams();
    const [prevLang, setPrevLang] = useState(lang);
    const infoLang = React.useMemo(() => menuItems.find((item) => item.lang === lang) || null, [lang]);

    const { data, error, fetchData, isLoading } = useAjax<IGithubResponse>(endpoint, {
        queryString: { q: getQuery(lang), sort: 'stars', order: 'desc' },
    });

    useEffect(() => {
        if ((!data && !error) || lang !== prevLang) {
            fetchData({ q: getQuery(lang) });
            setPrevLang(lang);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, error, lang]);
    return {
        isLoading,
        hasItems: !!data?.items?.length,
        error: error && (isString(error) ? `Error: ${error}` : 'An unknown error occurred!'),
        data,
        infoLang,
    };
};
