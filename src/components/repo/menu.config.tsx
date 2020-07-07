import React from 'react';

import CodeIcon from '@material-ui/icons/Code';

import { JsIcon, TsIcon, PythonIcon, JavaIcon } from '../../resources/icons';

export const menuItems: Array<{
    lang: string;
    text: string;
    icon: JSX.Element;
}> = [
    { lang: 'javascript', text: 'JavaScript', icon: <JsIcon /> },
    { lang: 'typescript', text: 'TypeScript', icon: <TsIcon /> },
    { lang: 'python', text: 'Python', icon: <PythonIcon /> },
    { lang: 'java', text: 'Java', icon: <JavaIcon /> },
    { lang: '', text: 'Show All', icon: <CodeIcon /> },
];
