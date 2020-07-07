import React from 'react';
import clsx from 'clsx';

import { Typography, AppBar, IconButton, Toolbar, makeStyles } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

interface IHeader {
    onOpenBarClick: () => void;
    isOpenBar: boolean;
}

const drawerWidth = 240;

const useStyles = makeStyles(({ zIndex, transitions }) => ({
    appBar: {
        zIndex: zIndex.drawer + 1,
        transition: transitions.create(['width', 'margin'], {
            easing: transitions.easing.sharp,
            duration: transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: transitions.create(['width', 'margin'], {
            easing: transitions.easing.sharp,
            duration: transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
}));

export const Header: React.FC<IHeader> = ({ onOpenBarClick, isOpenBar }) => {
    const classes = useStyles();

    return (
        <AppBar position="absolute" className={clsx(classes.appBar, isOpenBar && classes.appBarShift)}>
            <Toolbar>
                {!isOpenBar && (
                    <IconButton
                        className={classes.menuButton}
                        onClick={onOpenBarClick}
                        edge="start"
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                )}
                <Typography component="h1" variant="h6" color="inherit" noWrap>
                    Github stars
                </Typography>
            </Toolbar>
        </AppBar>
    );
};
