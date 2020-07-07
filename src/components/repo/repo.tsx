import React from 'react';

import { Grid, Card, makeStyles } from '@material-ui/core';

import { Header } from './header';
import { Media } from './media';
import { Content } from './content';
import { Actions } from './actions';

const useStyles = makeStyles(() => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%',
    },
    cardContent: {
        flexGrow: 1,
    },
}));

type TObject<T = any> = { [key: string]: T };

export interface IGithubItem extends TObject {
    id: number;
    license: TObject;
    owner: {
        login: string;
        avatar_url: string;
        url: string;
    } & TObject;
    name: string;
    description: string;
    stargazers_count: number;
    watchers_count: number;
    forks_count: number;
    url: string;
    language: string;
    full_name: string;
}

interface IRepo {
    item: IGithubItem;
}

export const Repo: React.FC<IRepo> = ({ item }) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <Header item={item} />
                <Media item={item} />
                <Content url={item.html_url} name={item.name} desc={item.description} />
                <Actions stars={item.stargazers_count} forks={item.forks_count} />
            </Card>
        </Grid>
    );
};
