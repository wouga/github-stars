import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import { Repos } from './repos';

interface IContent {}

const useStyles = makeStyles(({ mixins }) => ({
    appBarSpacer: mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
}));

export const Content: React.FC<IContent> = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Switch>
                <Route exact path="/:lang">
                    <Repos />
                </Route>
                <Route exact path="/">
                    <Repos />
                </Route>
            </Switch>
        </main>
    );
};
