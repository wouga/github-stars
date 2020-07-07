import React from 'react';
import { NavLink } from 'react-router-dom';

import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

interface IMenuItem {
    icon: JSX.Element;
    text: string;
    lang: string;
}

export const MenuItem: React.FC<IMenuItem> = ({ icon, text, lang }) => {
    return (
        <ListItem activeClassName="Mui-selected" exact component={NavLink} to={`/${lang}`} button>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
    );
};
