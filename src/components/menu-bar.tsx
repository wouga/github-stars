import React from 'react';
import clsx from 'clsx';

import { Drawer, IconButton, Divider, List, makeStyles } from '@material-ui/core';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { MenuItem } from './menu-item';
import { menuItems } from './repo/menu.config';

interface IMenuBar {
    onCloseBarClick: () => void;
    isOpenBar: boolean;
}

const drawerWidth = 240;

const useStyles = makeStyles(({ transitions, spacing, breakpoints, mixins }) => ({
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: transitions.create('width', {
            easing: transitions.easing.sharp,
            duration: transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: transitions.create('width', {
            easing: transitions.easing.sharp,
            duration: transitions.duration.leavingScreen,
        }),
        width: spacing(7),
        [breakpoints.up('sm')]: {
            width: spacing(9),
        },
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...mixins.toolbar,
    },
}));

export const MenuBar: React.FC<IMenuBar> = ({ onCloseBarClick, isOpenBar }) => {
    const classes = useStyles();

    return (
        <Drawer
            variant="permanent"
            open={true}
            classes={{
                paper: clsx(classes.drawerPaper, !isOpenBar && classes.drawerPaperClose),
            }}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={onCloseBarClick}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>{menuItems && menuItems.map((item) => <MenuItem key={item.lang} {...item} />)}</List>
        </Drawer>
    );
};
