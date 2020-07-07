import { useState } from 'react';
import { stringify } from 'qs';

type TObject = { [name: string]: string };

type TFetchData = (qs?: TObject) => void;
enum HttpMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH',
}

interface IUseAjaxOptions {
    queryString?: TObject;
    method?: HttpMethods;
    headers?: TObject;
    body?: string;
}

interface IState<T = any> {
    data: T | null;
    error: boolean;
    isLoading: boolean;
}

const initAjaxState: IState = {
    data: null,
    error: false,
    isLoading: true,
};

const defaultOption: IUseAjaxOptions = {
    queryString: {},
    method: HttpMethods.GET,
    headers: {
        'Content-Type': 'application/json',
    },
};

export const useAjax = <T>(
    url: string,
    opts: IUseAjaxOptions = {},
    mock?: T,
): { fetchData: TFetchData } & IState<T> => {
    const [ajaxState, setAjaxState] = useState<IState<T>>(initAjaxState);

    const { queryString, ...fetchOptions } = {
        ...defaultOption,
        ...opts,
        headers: {
            ...defaultOption.headers,
            ...opts.headers,
        },
    };

    if (![HttpMethods.GET].includes(fetchOptions.method || HttpMethods.GET) && fetchOptions.body) {
        fetchOptions.body = JSON.stringify(fetchOptions.body);
    }

    const fetchData: TFetchData = (qs) => {
        if (mock) {
            return setAjaxState({
                data: mock,
                isLoading: false,
                error: false,
            });
        }

        setAjaxState({ ...ajaxState, error: false, isLoading: true });
        const endpoint = `${url}?${stringify({ ...queryString, ...qs })}`;
        fetch(endpoint, fetchOptions)
            .then(async (response) => {
                response.json().then((data: T) =>
                    setAjaxState({
                        data,
                        isLoading: false,
                        error: response.status >= 300 ? (data as any)?.message || true : false,
                    }),
                );
            })
            .catch((error) => {
                setAjaxState({
                    data: null,
                    isLoading: false,
                    error: error || true,
                });
            });
    };

    return {
        fetchData,
        ...ajaxState,
    };
};
